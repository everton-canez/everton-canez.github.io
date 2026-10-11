import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_POSTS } from './blog/blog-posts.generated';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'experience',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'skills',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'work',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'interests',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'admin',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => BLOG_POSTS.map(({ slug }) => ({ slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
