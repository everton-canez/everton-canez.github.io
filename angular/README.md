# Everton Canez — Angular portfolio

This is a standalone Angular version of the portfolio. It lives in `angular/` and does not modify the existing site or the original resume in `resume/`.

The app uses Angular 22. Use Node.js 22.22.3+, 24.15.0+, or 26.0.0+; Node.js 26 is recommended.
Global styles are authored in SCSS and use rem units for sizing.
The portfolio is a single page with anchored sections at `/#top`, `/#about`, `/#experience`, `/#skills`, `/#work`, and `/#interests`. The blog index remains at `/blog`, individual posts are available at `/blog/<slug>/`, and `/admin` is the GitHub-based blog publishing guide. Blog posts are authored in Markdown, converted during the build, and prerendered as static pages. Contact links open the LinkedIn profile. The build also emits a `404.html` fallback so GitHub Pages can load deep links directly and on refresh.
An ATS-focused, semantic HTML resume is available at `/resume.html`, with a downloadable plain-text version at `/everton-canez-resume.txt`.

## Run locally

```sh
npm ci
npm start
```

## Build

```sh
npm run build
```

The production build is written to `dist/browser` with a root base URL, ready to publish as the `everton-canez.github.io` user site. GitHub Pages does not automatically build an Angular app from a nested folder; the workflow in `.github/workflows/deploy-pages.yml` builds this app and publishes the compiled output.

Place static images, icons, and other public files in `public/assets/`; they are copied to the deployed site under `/assets/`.

To enable deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Push to `master` to publish the Angular app at `https://everton-canez.github.io/`.

## Writing a blog post

Add a `.md` file to `content/blog/`. The filename becomes the post URL slug. Include a YAML frontmatter block with a title, ISO date, and description:

```markdown
---
title: "A useful title"
date: "2026-10-11"
description: "A short summary for the post listing and search engines."
---

Write the post in Markdown.
```

Run `npm run build` to generate the post index and prerender the main portfolio page, `/blog`, and each published `/blog/<slug>/` page. Set `draft: true` in the frontmatter to keep a post out of the published site. Original blog writing is licensed under CC BY 4.0; see the repository-root `LICENSE`.

The `/admin` page links to GitHub's file editor for creating and editing posts. It is a public publishing guide, not an authentication boundary: GitHub repository permissions control who can write, and repository branch protection/required reviews should be configured in GitHub Settings if publishing must require approval. Never put a GitHub token in the static app.

## Enabling comments

Comments use giscus and GitHub Discussions. Enable Discussions for this repository, install/authorize the giscus app, and select a Discussions category at [giscus.app](https://giscus.app/). Copy the generated repository ID and category ID into `src/app/blog/giscus.config.ts`; update the category name there if you selected a category other than `Announcements`. The widget is omitted until both IDs are configured.
