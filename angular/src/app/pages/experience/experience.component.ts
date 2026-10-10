import { Component } from '@angular/core';
import type { Experience } from '../../models/experience.model';

@Component({
  selector: 'ec-experience',
  standalone: true,
  template: `
    <section class="experience section-pad page-grid" aria-labelledby="experience-title">
      <div class="section-label"><span>02</span> / WHERE I’VE BEEN</div>
      <div class="section-main">
        <div class="section-heading">
          <p class="eyebrow">A FEW CHAPTERS</p>
          <h1 id="experience-title">Experience<span class="accent-dot">.</span></h1>
        </div>
        <div class="experience-list">
          @for (item of experience; track item.company + item.dates) {
            <article class="experience-item">
              <div class="experience-date">{{ item.dates }}</div>
              <div class="experience-detail">
                <h2>{{ item.role }}</h2>
                <p class="company-name">{{ item.company }}</p>
                <p class="experience-summary">{{ item.summary }}</p>
              </div>
              <span class="experience-arrow" aria-hidden="true">↗</span>
            </article>
          }
        </div>
        <div class="education-block">
          <p class="eyebrow">ALWAYS LEARNING</p>
          <h2>Education</h2>
          <div class="education-row">
            <span>Postgraduate, Computer Software Engineering for Government Solutions</span>
            <span>University of Santa Cruz do Sul <span class="education-year">2014 — 2016</span></span>
          </div>
          <div class="education-row">
            <span>Information Systems Technologist</span>
            <span>University of Technology SENACRS <span class="education-year">2007 — 2010</span></span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly experience: Experience[] = [
    {
      role: 'Front-End Developer',
      company: 'Siemens',
      dates: 'Apr 2023 — Present',
      summary: 'Focused on front-end development, UI/UX, and CI/CD for Siemens Smart Sales Representatives, with automated testing.'
    },
    {
      role: 'Senior Front-End Developer',
      company: 'Alter Solutions',
      dates: 'Jan 2022 — Mar 2023',
      summary: 'Consulted on Siemens Internet Premium Portal projects, building front-end experiences and serving part-time as Scrum Master.'
    },
    {
      role: 'Senior Developer',
      company: 'Luiza Labs',
      dates: 'Apr 2021 — Jan 2022',
      summary: 'Built front-end and back-end software solutions to help business teams move with greater agility.'
    },
    {
      role: 'Full Stack Web Developer',
      company: 'Hotmedia',
      dates: 'Sep 2019 — Apr 2021',
      summary: 'Worked across web and mobile development, automated testing, and software architecture for broadcast media.'
    },
    {
      role: 'Full Stack Web Developer',
      company: 'PROCERGS',
      dates: 'Aug 2011 — Apr 2021',
      summary: 'Created application models and microservices, supported 200+ front-end developers, and helped teams improve documentation, pipelines, and releases.'
    },
    {
      role: 'Computer Analyst',
      company: 'PROCERGS',
      dates: 'Apr 2011 — Aug 2011',
      summary: 'Supported Angular and Ionic teams, maintained services for the National Post Company, and worked on mobile apps and the internal app store.'
    },
    {
      role: 'Web Developer',
      company: 'PROCERGS',
      dates: 'Feb 2005 — Apr 2011',
      summary: 'Developed Java and Oracle Workflow systems, SOAP web services, and interfaces for government management teams.'
    }
  ];
}
