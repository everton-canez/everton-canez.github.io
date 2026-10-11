import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ec-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <header class="site-header">
      <a class="wordmark" routerLink="/" aria-label="Everton Canez, home" (click)="closeMenu()">
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
        <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a>
        <a routerLink="/about" routerLinkActive="is-active" (click)="closeMenu()">About</a>
        <a routerLink="/experience" routerLinkActive="is-active" (click)="closeMenu()">Experience</a>
        <a routerLink="/skills" routerLinkActive="is-active" (click)="closeMenu()">Skills</a>
        <a routerLink="/work" routerLinkActive="is-active" (click)="closeMenu()">Selected work</a>
        <a routerLink="/interests" routerLinkActive="is-active" (click)="closeMenu()">Interests</a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer" class="resume-nav-link" (click)="closeMenu()">Resume</a>
        <a href="https://www.linkedin.com/in/everton-canez/" target="_blank" rel="noopener noreferrer" class="nav-contact" (click)="closeMenu()">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <a class="wordmark footer-mark" routerLink="/"><span class="wordmark-mark">EC</span><span>Everton Canez</span></a>
    </footer>
  `
})
export class AppComponent {
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }
}
