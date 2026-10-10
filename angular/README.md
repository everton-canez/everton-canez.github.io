# Everton Canez — Angular portfolio

This is a standalone Angular version of the portfolio. It lives in `angular/` and does not modify the existing site or the original resume in `resume/`.

The app uses Angular 22. Use Node.js 22.22.3+, 24.15.0+, or 26.0.0+; Node.js 26 is recommended.
Global styles are authored in SCSS and use rem units for sizing.
The portfolio sections are separate lazy-loaded routes: `/`, `/about`, `/experience`, `/skills`, `/work`, and `/interests`. Contact links open the LinkedIn profile. The build also emits a `404.html` fallback so GitHub Pages can load those routes directly and on refresh.
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

To enable deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Push to `master` to publish the Angular app at `https://everton-canez.github.io/`.
