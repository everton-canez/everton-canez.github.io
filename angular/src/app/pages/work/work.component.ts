import { Component } from '@angular/core';
import type { Project } from '../../models/project.model';

@Component({
  selector: 'ec-work',
  standalone: true,
  template: `
    <section class="work section-pad" aria-labelledby="work-title">
      <div class="work-inner">
        <div class="section-label"><span>04</span> / SELECTED WORK</div>
        <div class="work-heading">
          <div>
            <p class="eyebrow">A SMALL SELECTION</p>
            <h1 id="work-title">Things made <span>with purpose.</span></h1>
          </div>
          <p>A few projects and teams I’ve had the pleasure of contributing to — from offline-first mobile apps to tools used across public services.</p>
        </div>
        <div class="project-grid">
          @for (project of projects; track project.number) {
            <article class="project-card">
              <div class="project-topline"><span>{{ project.number }}</span><span>{{ project.category }}</span></div>
              <h2>{{ project.name }}</h2>
              <p>{{ project.description }}</p>
              <div class="project-bottom">
                <div class="project-tags">
                  @for (tech of project.technologies; track tech) {
                    <span>{{ tech }}</span>
                  }
                </div>
                @if (project.link && project.linkLabel) {
                  <a class="project-link" [href]="project.link" target="_blank" rel="noopener noreferrer">{{ project.linkLabel }} <span aria-hidden="true">↗</span></a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class WorkComponent {
  readonly projects: Project[] = [
    {
      number: '01',
      name: 'Siemens Smart Sales',
      category: 'ENTERPRISE · FRONT-END',
      description: 'Front-end development for Smart Sales systems and the Siemens Internet Premium Portal, with a focus on clear interfaces and reliable delivery.',
      technologies: ['Angular', 'UI / UX', 'CI/CD']
    },
    {
      number: '02',
      name: 'Solubio OnFarm',
      category: 'AGRICULTURE · MOBILE',
      description: 'An offline-first farm inspection workflow built for people working in areas with unreliable or no mobile signal.',
      technologies: ['Angular', 'Ionic', 'Offline-first'],
      link: 'https://apps.apple.com/br/app/solubio-onfarm/id1585449272?l=en',
      linkLabel: 'App Store'
    },
    {
      number: '03',
      name: 'Diversifica-me',
      category: 'DIVERSITY · WEB',
      description: 'A front-end for a project helping companies build more equitable selection processes and more creative workplaces.',
      technologies: ['Angular', 'Mobile web'],
      link: 'https://diversifica.me',
      linkLabel: 'Visit site'
    },
    {
      number: '04',
      name: 'Randonneurs Brazil',
      category: 'CYCLING · WEB & API',
      description: 'An administration website and Node.js APIs supporting the Randonneurs Brazil website, events, and mobile app.',
      technologies: ['Angular', 'Node.js', 'Bootstrap'],
      link: 'https://apps.apple.com/br/app/randonneurs-brasil/id1480778835?l=en',
      linkLabel: 'App Store'
    },
    {
      number: '05',
      name: 'Frigorífico Silva',
      category: 'CUSTOMER EXPERIENCE · MOBILE',
      description: 'A mobile customer portal that makes it easier to purchase and follow products, built with Ionic and Angular.',
      technologies: ['Angular', 'Ionic', 'Mobile'],
      link: 'https://apps.apple.com/br/app/frig-silva-portal-cliente/id1524064105?l=en',
      linkLabel: 'App Store'
    },
    {
      number: '06',
      name: 'Public services & digital government',
      category: 'GOVERNMENT · PLATFORM',
      description: 'Applications, address-integration services, and internal distribution tools built for public-sector teams and their communities.',
      technologies: ['AngularJS', 'Java', 'REST APIs']
    }
  ];
}
