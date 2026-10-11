import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const projectRoot = join(import.meta.dirname, '..');
const contentDirectory = join(projectRoot, 'content', 'blog');
const generatedFile = join(projectRoot, 'src', 'app', 'blog', 'blog-posts.generated.ts');

function fail(fileName, message) {
  throw new Error(`Invalid blog post "${fileName}": ${message}`);
}

function normalizeDate(value, fileName) {
  const date = value instanceof Date && !Number.isNaN(value.getTime()) ? value.toISOString().slice(0, 10) : value;
  const parsedDate = typeof date === 'string' ? new Date(`${date}T00:00:00Z`) : null;
  if (
    typeof date !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !parsedDate ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date
  ) {
    fail(fileName, 'frontmatter must include a valid date in YYYY-MM-DD format.');
  }
  return date;
}

const files = (await readdir(contentDirectory)).filter((file) => extname(file) === '.md');
const slugs = new Set();
const posts = [];

for (const fileName of files) {
  const filePath = join(contentDirectory, fileName);
  const slug = basename(fileName, '.md');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    fail(fileName, 'the filename must be a lowercase kebab-case slug.');
  }
  if (slugs.has(slug)) {
    fail(fileName, `the slug "${slug}" is duplicated.`);
  }
  slugs.add(slug);

  const source = await readFile(filePath, 'utf8');
  const { content, data } = matter(source);
  if (typeof data.title !== 'string' || !data.title.trim()) {
    fail(fileName, 'frontmatter must include a non-empty title.');
  }
  if (typeof data.description !== 'string' || !data.description.trim()) {
    fail(fileName, 'frontmatter must include a non-empty description.');
  }

  const post = {
    slug,
    title: data.title.trim(),
    date: normalizeDate(data.date, fileName),
    description: data.description.trim(),
    html: await marked.parse(content)
  };

  if (data.draft !== true) {
    posts.push(post);
  }
}

posts.sort((left, right) => right.date.localeCompare(left.date) || left.title.localeCompare(right.title));

const output = `import type { BlogPost } from './models/blog-post.model';\n\nexport const BLOG_POSTS: BlogPost[] = ${JSON.stringify(posts, null, 2)};\n`;
await writeFile(generatedFile, output);
console.log(`Generated blog index with ${posts.length} published post${posts.length === 1 ? '' : 's'}.`);
