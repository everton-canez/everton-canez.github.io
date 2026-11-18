import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

type Theme = 'light' | 'dark';

@Component({
  selector: 'ec-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="site-header">
      <a class="wordmark" routerLink="/" fragment="top" aria-label="Everton Canez, home" (click)="closeMenu()">
        <span class="wordmark-mark">EC</span>
        <span>Everton Canez</span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        [attr.aria-expanded]="menuOpen"
        aria-controls="primary-navigation"
        (click)="menuOpen = !menuOpen"
      >
        <span>{{ menuOpen ? 'Close' : 'Menu' }}</span>
        <span class="menu-lines" aria-hidden="true"></span>
      </button>

      <nav id="primary-navigation" class="navigation" [class.is-open]="menuOpen" aria-label="Main navigation">
        <a routerLink="/" fragment="top" (click)="closeMenu()">Home</a>
        <a routerLink="/" fragment="about" (click)="closeMenu()">About</a>
        <a routerLink="/" fragment="experience" (click)="closeMenu()">Experience</a>
        <a routerLink="/" fragment="skills" (click)="closeMenu()">Skills</a>
        <a routerLink="/" fragment="work" (click)="closeMenu()">Selected work</a>
        <a routerLink="/" fragment="interests" (click)="closeMenu()">Interests</a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer" class="resume-nav-link" (click)="closeMenu()">Resume</a>
        <a href="https://www.linkedin.com/in/everton-canez/" target="_blank" rel="noopener noreferrer" class="nav-contact" (click)="closeMenu()">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>

      <button
        class="theme-toggle"
        type="button"
        [attr.aria-label]="'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode'"
        [attr.title]="'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode'"
        (click)="toggleTheme()"
      >
        <span class="theme-toggle-icon" aria-hidden="true">{{ theme === 'light' ? '☾' : '☀' }}</span>
        <span>{{ theme === 'light' ? 'Dark' : 'Light' }}</span>
      </button>
    </header>

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <a class="wordmark footer-mark" routerLink="/" fragment="top"><span class="wordmark-mark">EC</span><span>Everton Canez</span></a>
    </footer>
  `
})
export class AppComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly platformId = inject(PLATFORM_ID);

  menuOpen = false;
  theme: Theme = 'dark';

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let savedTheme: string | null;
    try {
      savedTheme = window.localStorage.getItem('theme');
    } catch (error) {
      console.error('Unable to read the saved theme preference.', error);
      return;
    }

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme, false);
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  private setTheme(theme: Theme, persist = true): void {
    this.theme = theme;
    this.document.documentElement.setAttribute('data-theme', theme);
    this.meta.updateTag({ name: 'theme-color', content: theme === 'dark' ? '#171a17' : '#f5f5f2' });

    if (!persist || !isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      window.localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Unable to save the theme preference.', error);
    }
  }
}
