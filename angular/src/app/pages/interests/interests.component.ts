import { Component } from '@angular/core';

@Component({
  selector: 'ec-interests',
  standalone: true,
  template: `
    <section class="interests section-pad page-grid" aria-labelledby="interests-title">
      <div class="section-label"><span>05</span> / OFF THE CLOCK</div>
      <div class="interests-content">
        <p class="eyebrow">LIFE BEYOND THE SCREEN</p>
        <h1 id="interests-title">Curiosity doesn’t<br>clock out<span class="accent-dot">.</span></h1>
        <p>Outside work, I enjoy discovering new places, staying active, and finding fresh perspectives. I’m especially drawn to cycling and the communities built around exploring the world at your own pace.</p>
        <div class="interest-tags"><span>CYCLING</span><span>TRAVEL</span><span>LEARNING</span><span>GOOD PEOPLE</span></div>
      </div>
      <div class="interest-art" aria-hidden="true"><span>Keep<br>moving<span class="accent-dot">.</span></span><i></i></div>
    </section>
  `
})
export class InterestsComponent {}
