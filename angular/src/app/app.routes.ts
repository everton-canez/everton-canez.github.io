import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((module) => module.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((module) => module.AboutComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then((module) => module.ExperienceComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then((module) => module.SkillsComponent)
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then((module) => module.WorkComponent)
  },
  {
    path: 'interests',
    loadComponent: () => import('./pages/interests/interests.component').then((module) => module.InterestsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
