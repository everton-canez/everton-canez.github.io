import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog-posts.generated';

const repositoryUrl = 'https://github.com/everton-canez/everton-canez.github.io';
const newPostUrl = `${repositoryUrl}/new/master/angular/content/blog`;

@Component({
  selector: 'ec-blog-admin',
  standalone: true,
  imports: [DatePipe, RouterLink],
  template: `
    <section class="blog-admin page-grid" aria-labelledby="admin-title">
      <div class="section-label"><span>ADMIN</span> — PUBLISHING</div>
      <div class="blog-admin-content">
        <a class="blog-back-link" routerLink="/blog"><span aria-hidden="true">←</span> Back to the blog</a>
        <p class="eyebrow">POST MANAGEMENT</p>
        <h1 id="admin-title">Publish a <span>new post.</span></h1>
        <p class="blog-admin-intro">
          Posts are Markdown files in the website repository. Create or edit them on GitHub, then publish through the repository’s normal commit or pull-request workflow.
        </p>

        <aside class="blog-admin-access" aria-label="Access control">
          <p class="eyebrow">ACCESS CONTROL</p>
          <p>
            This guide is public; it does not grant access to publish. GitHub checks your account’s repository permissions when you save changes. If you do not have write access, GitHub may offer a fork or pull request instead. Only merge changes from trusted contributors.
          </p>
        </aside>

        <div class="blog-admin-actions">
          <a class="button button-dark" [href]="newPostUrl" target="_blank" rel="noopener noreferrer">
            Create post on GitHub <span aria-hidden="true">↗</span>
          </a>
          <a class="text-link" [href]="postsDirectoryUrl" target="_blank" rel="noopener noreferrer">
            Browse Markdown files <span aria-hidden="true">↗</span>
          </a>
        </div>

        <section class="blog-admin-section" aria-labelledby="template-title">
          <h2 id="template-title">Start with this template</h2>
          <p>Name the file with a lowercase, hyphen-separated slug, for example <code>my-new-post.md</code>.</p>
          <pre><code>---
title: "Your post title"
date: "YYYY-MM-DD"
description: "A short summary for the post listing and search engines."
---

Start writing your post in Markdown.</code></pre>
          <p>Save or open a pull request against <code>master</code>. The Pages workflow builds and publishes the post after changes reach that branch.</p>
        </section>

        <section class="blog-admin-section" aria-labelledby="existing-posts-title">
          <h2 id="existing-posts-title">Existing posts</h2>
          @if (posts.length) {
            <ul class="blog-admin-posts">
              @for (post of posts; track post.slug) {
                <li>
                  <a [href]="postEditUrl(post.slug)" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
                  <time [attr.datetime]="post.date">{{ post.date | date: 'mediumDate' }}</time>
                </li>
              }
            </ul>
          } @else {
            <p>No published posts yet.</p>
          }
        </section>

        <p class="blog-admin-settings-note">
          For stricter publishing controls, manage collaborators under GitHub repository Settings and protect <code>master</code> with required pull requests and reviews. Those GitHub settings—not this public page—enforce who can publish.
        </p>
      </div>
    </section>
  `
})
export class BlogAdminComponent {
  readonly posts = BLOG_POSTS;
  readonly newPostUrl = newPostUrl;
  readonly postsDirectoryUrl = `${repositoryUrl}/tree/master/angular/content/blog`;

  constructor() {
    inject(Title).setTitle('Blog publishing — Everton Canez');
  }

  postEditUrl(slug: string): string {
    return `${repositoryUrl}/edit/master/angular/content/blog/${encodeURIComponent(slug)}.md`;
  }
}
