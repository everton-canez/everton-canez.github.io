import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog-posts.generated';
import { GiscusCommentsComponent } from './giscus-comments.component';

@Component({
  selector: 'ec-blog-post',
  standalone: true,
  imports: [DatePipe, GiscusCommentsComponent, RouterLink],
  template: `
    @if (post; as article) {
      <article class="blog-article">
        <a class="blog-back-link" routerLink="/blog"><span aria-hidden="true">←</span> All posts</a>
        <header class="blog-article-header">
          <p class="eyebrow">THE BLOG <span class="eyebrow-divider">/</span> {{ article.date | date: 'longDate' }}</p>
          <h1>{{ article.title }}</h1>
          <p class="blog-article-description">{{ article.description }}</p>
        </header>
        <div class="markdown-content" [innerHTML]="article.html"></div>
        <p class="blog-article-license">
          This article is licensed under
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">CC BY 4.0</a>.
          Please credit Everton Canez and link to this page when sharing or adapting it.
        </p>
        <ec-giscus-comments />
      </article>
    } @else {
      <section class="blog-not-found">
        <p class="eyebrow">404 <span class="eyebrow-divider">/</span> POST NOT FOUND</p>
        <h1>This post isn’t here.</h1>
        <a class="blog-back-link" routerLink="/blog"><span aria-hidden="true">←</span> Back to the blog</a>
      </section>
    }
  `
})
export class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  readonly post = BLOG_POSTS.find(({ slug }) => slug === this.route.snapshot.paramMap.get('slug'));

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);

    if (this.post) {
      title.setTitle(`${this.post.title} — Everton Canez`);
      meta.updateTag({ name: 'description', content: this.post.description });
      meta.updateTag({ property: 'og:title', content: this.post.title });
      meta.updateTag({ property: 'og:description', content: this.post.description });
    }
  }
}
