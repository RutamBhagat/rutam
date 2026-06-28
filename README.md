# Rutam Bhagat Portfolio

Personal portfolio for Rutam Bhagat, built with Next.js, React, Tailwind CSS,
and Motion.

## Features

- One-page portfolio with projects, work experience, education, and contact links.
- Project writeups rendered from each project's GitHub README.
- SEO metadata, sitemap, robots.txt, OpenGraph image, and `/llms.txt`.
- Responsive light/dark theme support.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Project Content

Portfolio data lives in `app/data`, with projects in `app/data/projects.ts`.

Each project has:

- `link`: the source repository.
- `blog`: the local portfolio route.
- `readme`: the raw GitHub README URL rendered on the blog route.

Update those fields together when adding or changing a project.
