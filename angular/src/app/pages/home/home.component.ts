import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ec-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero page-grid" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> FRONT-END DEVELOPER <span class="eyebrow-divider">/</span> PORTUGAL</p>
        <h1 id="hero-title">Thoughtful code.<br><span>Useful experiences.</span></h1>
        <p class="hero-intro">I’m Everton — a front-end developer who turns complex problems into clear, human digital products.</p>
        <div class="hero-actions">
          <a class="button button-dark" routerLink="/work">Explore my work <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="https://www.linkedin.com/in/everton-canez/" target="_blank" rel="noopener noreferrer">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-meta">
          <span>BASED IN SETÚBAL, PORTUGAL</span>
          <span>BUILDING FOR THE WEB SINCE 2005</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-card">
          <span class="visual-card-kicker">A THOUGHTFUL APPROACH</span>
          <span class="visual-monogram">EC<span>.</span></span>
          <span class="visual-card-caption">Curious by nature.<br>Developer by craft.</span>
          <span class="visual-card-stamp">EST. 2005<br>PORTUGAL</span>
        </div>
        <span class="visual-index">01 — 05</span>
        <span class="visual-orbit orbit-one"></span>
        <span class="visual-orbit orbit-two"></span>
      </div>
      <a class="scroll-cue" routerLink="/about"><span class="scroll-line"></span> EXPLORE MY STORY <span aria-hidden="true">↗</span></a>
    </section>
  `
})
export class HomeComponent {}
