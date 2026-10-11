import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog-posts.generated';

@Component({
  selector: 'ec-blog-index',
  standalone: true,
  imports: [DatePipe, RouterLink],
  template: `
    <section class="blog-page page-grid" aria-labelledby="blog-title">
      <div class="section-label"><span>07</span> — NOTES & IDEAS</div>
      <div class="blog-content">
        <p class="eyebrow">THE BLOG</p>
        <h1 id="blog-title">Thoughts on <span>building for the web.</span></h1>
        <p class="blog-intro">Notes, lessons, and ideas from a life spent making things for the web.</p>

        @if (posts.length) {
          <div class="blog-list">
            @for (post of posts; track post.slug) {
              <article class="blog-card">
                <p class="blog-date">{{ post.date | date: 'longDate' }}</p>
                <h2><a [routerLink]="['/blog', post.slug]">{{ post.title }}</a></h2>
                <p>{{ post.description }}</p>
                <a class="blog-read-link" [routerLink]="['/blog', post.slug]">
                  Read article <span aria-hidden="true">↗</span>
                </a>
              </article>
            }
          </div>
        } @else {
          <div class="blog-empty">
            <span class="blog-empty-mark" aria-hidden="true">01</span>
            <h2>More to come.</h2>
            <p>There are no published posts yet. Check back soon.</p>
          </div>
        }

        <p class="blog-license">
          Original writing is shared under
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">CC BY 4.0</a>.
          Please credit the author when sharing or adapting a post.
        </p>
      </div>
    </section>
  `
})
export class BlogIndexComponent {
  readonly posts = BLOG_POSTS;

  constructor() {
    inject(Title).setTitle('Blog — Everton Canez');
  }
}
