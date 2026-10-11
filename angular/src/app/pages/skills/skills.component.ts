import { Component } from '@angular/core';

@Component({
  selector: 'ec-skills',
  standalone: true,
  template: `
    <section class="capabilities section-pad page-grid" aria-labelledby="capabilities-title">
      <div class="section-label"><span>03</span> / WHAT I BRING</div>
      <div class="section-main capability-layout">
        <div>
          <p class="eyebrow">GOOD TOOLS, BETTER JUDGEMENT</p>
          <h1 id="capabilities-title">A toolkit for<br>getting things <span>done.</span></h1>
        </div>
        <div class="capability-content">
          <p class="capability-intro">From shaping a front-end architecture to getting the details right on a small screen, I enjoy making the whole product work better.</p>
          <div class="skill-list" aria-label="Technology skills">
            @for (skill of skills; track skill) {
              <span>{{ skill }}</span>
            }
          </div>
          <div class="workflow">
            <p class="eyebrow">HOW I WORK</p>
            <p>Front-end and back-end development <span>·</span> Mobile apps <span>·</span> Software architecture <span>·</span> Automated and cross-browser testing <span>·</span> CI/CD <span>·</span> Agile, Scrum &amp; Kanban <span>·</span> Documentation and knowledge sharing</p>
            <p class="language-line">Portuguese — native <span>·</span> English — fluent</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly skills = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Sass',
    'Ionic', 'Capacitor', 'Node.js', 'Git', 'GitHub', 'GitLab', 'npm', 'Docker', 'Podman',
    'Azure DevOps', 'CI/CD'
  ];
}
