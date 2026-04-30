# ARCHITECTURE

## Project Overview

Personal portfolio website built with Next.js.

Purpose:

- Present professional profile
- Showcase software engineering experience
- Display UI/UX work
- Show projects, skills, resume and contact information
- Strengthen personal brand

---

## Tech Stack

- Next.js
- TypeScript
- React
- CSS Modules / Tailwind / Styled system (adapt to actual stack)
- Vercel deployment

---

## Core Principles

- Fast loading
- Clean SEO structure
- Responsive on all devices
- Minimal maintenance
- Professional presentation
- Easy to expand with new sections

---

## Suggested Structure

/app or /pages
/components
/layouts
/sections
/lib
/public
/styles
/data

---

## Folder Responsibilities

### /components

Reusable UI pieces.

Examples:

- Button
- Card
- Badge
- Navbar
- Footer

### /sections

Homepage or page blocks.

Examples:

- Hero
- About
- Experience
- Projects
- Skills
- Contact

### /data

Static structured content.

Examples:

- projects.ts
- experience.ts
- skills.ts

### /lib

Helpers and utilities.

Examples:

- formatters
- analytics
- SEO helpers

### /public

Static assets.

Examples:

- images
- icons
- resume.pdf

---

## Routing

Main routes:

- /
- /projects
- /about
- /contact

Optional:

- /blog
- /resume

---

## Coding Conventions

- Functional React components
- TypeScript interfaces for props
- Named reusable components
- Avoid giant page files
- Keep components focused
- Prefer composition over duplication

---

## Performance Rules

- Use Next Image where possible
- Lazy load heavy sections
- Compress images
- Avoid unnecessary animations
- Keep bundle light

---

## SEO Rules

Each page should include:

- title
- description
- open graph image
- semantic headings
- clean URLs

---

## Content Rules

Portfolio content must be easy to update without touching layout logic.

Use arrays / JSON / TS objects for:

- projects
- timeline
- skills
- testimonials

---

## Deployment

Primary target:

- Vercel

Must support simple CI/CD from Git repository.