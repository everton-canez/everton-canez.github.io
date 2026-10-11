import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { giscusConfig } from './giscus.config';

@Component({
  selector: 'ec-giscus-comments',
  standalone: true,
  template: `
    <section class="blog-comments" aria-labelledby="comments-title">
      <p class="eyebrow">JOIN THE CONVERSATION</p>
      <h2 id="comments-title">Comments</h2>
      @if (isConfigured) {
        <div #comments></div>
      } @else {
        <p class="comments-setup-note">
          Comments will be available after giscus is connected to this repository’s GitHub Discussions.
        </p>
      }
    </section>
  `
})
export class GiscusCommentsComponent implements AfterViewInit {
  @ViewChild('comments') private commentsContainer?: ElementRef<HTMLDivElement>;

  readonly isConfigured = Boolean(giscusConfig.repoId && giscusConfig.categoryId);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!this.isConfigured || !isPlatformBrowser(this.platformId) || !this.commentsContainer) {
      return;
    }

    const script = this.commentsContainer.nativeElement.ownerDocument.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', giscusConfig.repo);
    script.setAttribute('data-repo-id', giscusConfig.repoId);
    script.setAttribute('data-category', giscusConfig.category);
    script.setAttribute('data-category-id', giscusConfig.categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    this.commentsContainer.nativeElement.append(script);
  }
}
