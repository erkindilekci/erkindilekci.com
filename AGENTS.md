# Repository Guidelines

## Project Overview

- This is a Vite + React 18 portfolio site for `erkindilekci.com`.
- The app entry point is `src/main.jsx`; the root UI is `src/App.jsx`.
- Main page sections live as flat React components under `src/components/main/`: `Hero`, `About`, `Skills`, `Projects`, `Experience`, `CaseStudies`, `Resume`, `Certifications`, and `Contact`.
- Portfolio content is mostly data-driven from `src/assets/data/`: `profile.js`, `skills.js`, `projects.js`, `experience.js`, `caseStudies.js`, and `certifications.js`.
- The resume PDF lives in `public/ErkinDilekci.pdf` and is linked through `resumeUrl` in `src/assets/data/profile.js`.

## Commands

- `npm run dev` starts the Vite dev server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` is configured in `package.json`, but no root ESLint config is visible; if it fails because config is missing, report that directly.
- On this Windows setup, use `C:\Users\erkin.dilekci\node-v24.15.0-win-x64\npm.cmd` if PowerShell blocks `npm.ps1`.

## Package And Repo Notes

- Both `package-lock.json` and `pnpm-lock.yaml` are present. Do not change lockfiles unless dependencies are intentionally added, removed, or updated.
- Default to npm scripts for routine verification unless the user asks for pnpm.
- This working directory may not be a Git repository; `git status` can fail here.
- `node_modules`, `dist`, and `.idea` are ignored and should not be edited manually.

## Coding Style

- Use functional React components and hooks, matching the nearby file style.
- Keep 4-space indentation and semicolons where the touched file uses them.
- Prefer Tailwind utility classes and the custom Tailwind tokens from `tailwind.config.js` over new CSS.
- The current design is light-only, modern, minimal, and oriented around data analyst / BI / junior data science roles.
- The app uses `react-icons` and `million/compiler`; avoid reintroducing unused section libraries unless needed.

## UI And Content Patterns

- Add or update profile, project, experience, skill, case study, and certification content in the data files first; avoid hardcoding repeated content in components.
- Section IDs are used by plain anchor links: `hero`, `about`, `skills`, `projects`, `experience`, `case-studies`, `resume`, `certifications`, and `contact`.
- Do not add fake demo or GitHub links. Project cards should only render external links when real URLs exist in the data.

## Verification

- For most code changes, run `npm run build`.
- Run `npm run lint` when lint config/dependencies are available or when the change is likely to affect lint rules.
- There is no dedicated test suite configured in this repo.
