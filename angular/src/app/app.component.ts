import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
    </header>

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <a class="wordmark footer-mark" routerLink="/" fragment="top"><span class="wordmark-mark">EC</span><span>Everton Canez</span></a>
    </footer>
  `
})
export class AppComponent {
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }
}
