import { Component } from '@angular/core';

@Component({
  selector: 'ec-about',
  standalone: true,
  template: `
    <section class="about section-pad page-grid" aria-labelledby="about-title">
      <div class="section-label"><span>01</span> / A LITTLE ABOUT ME</div>
      <div class="about-content">
        <h1 id="about-title">Good software starts with <span>good collaboration.</span></h1>
        <p class="about-lead">I’m a committed, collaborative developer who believes the best work happens when great teams focus on real business value and a solid user experience.</p>
        <div class="about-bottom">
          <p>Over two decades in software have taken me from Java and public-sector platforms to modern front-end applications, mobile products, and design systems. Today I focus on building accessible, dependable interfaces with thoughtful teams.</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/everton-canez/" target="_blank" rel="noopener noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/notreniev" target="_blank" rel="noopener noreferrer">GITHUB <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
