import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';

@Component({
  selector: 'ec-portfolio-page',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    WorkComponent,
    InterestsComponent
  ],
  template: `
    <ec-home />
    <ec-about id="about" />
    <ec-experience id="experience" />
    <ec-skills id="skills" />
    <ec-work id="work" />
    <ec-interests id="interests" />
  `
})
export class PortfolioPageComponent {}
