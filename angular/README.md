# Everton Canez — Angular portfolio

This is a standalone Angular version of the portfolio. It lives in `angular/` and does not modify the existing site or the original resume in `resume/`.

The app uses Angular 22. Use Node.js 22.22.3+, 24.15.0+, or 26.0.0+; Node.js 26 is recommended.
Global styles are authored in SCSS and use rem units for sizing.
The portfolio sections are separate lazy-loaded routes: `/`, `/about`, `/experience`, `/skills`, `/work`, and `/interests`. Contact links open the LinkedIn profile. The build also emits a `404.html` fallback so GitHub Pages can load those routes directly and on refresh.

## Run locally

```sh
npm ci
npm start
```

## Build

```sh
npm run build
```

The production build is written to `dist/browser`. Its base URL is `/angular/`, ready to serve the build output from the `/angular/` path on GitHub Pages.
