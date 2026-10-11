import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portfolio-page.component').then((module) => module.PortfolioPageComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog-index.component').then((module) => module.BlogIndexComponent)
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./blog/blog-post.component').then((module) => module.BlogPostComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./blog/blog-admin.component').then((module) => module.BlogAdminComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
