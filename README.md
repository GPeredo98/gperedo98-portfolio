# Documentation for humans

My modern portfolio built with **Next.js** to showcase my professional experience, software engineering work, UI/UX projects, and contact channels.

This project is focused on:

* Strong first impression
* Fast performance
* Clean responsive UI
* SEO visibility
* Easy maintenance
* Professional branding

<br>

# Tech Stack

## Core

* Next.js
* React
* TypeScript

## Styling

* Tailwind CSS

## UI / Animation

* Framer Motion

## Icons

* Lucide React

## Deployment

* Vercel



# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Default URL:

```text
http://localhost:3000
```

## Run on another port

```bash
npm run dev -- -p 3001
```

## Build production version

```bash
npm run build
```

## Start production locally

```bash
npm run start
```

## Run linter

```bash
npm run lint
```



# Project Structure

```text
/
├── app/ or pages/
├── components/
├── sections/
├── data/
├── public/
├── styles/
├── docs/
├── README.md
```



# Folder Guide

## /components

Reusable UI components.

Examples:

* Button
* Card
* Navbar
* Footer
* Badge

## /sections

Large homepage blocks.

Examples:

* Hero
* About
* Skills
* Experience
* Projects
* Contact

## /data

Static editable content.

Examples:

* projects.ts
* skills.ts
* experience.ts

## /public

Assets:

* images
* favicon
* CV / Resume PDF
* logos



# Icons

Icons are provided by **Lucide React**.

Install:

```bash
npm install lucide-react
```

Example:

```tsx
import { Github, Linkedin, Mail } from "lucide-react";
```

Why this library:

* Lightweight
* Clean visual style
* Tree-shakeable
* Modern developer aesthetic



# Images

Prefer **Next.js Image** component.

```tsx
import Image from "next/image";
```

Benefits:

* Lazy loading
* Better performance
* Responsive image sizing
* Optimization



# Styling Guidelines

* Prefer Tailwind utility classes
* Keep spacing consistent
* Reuse patterns
* Avoid unnecessary inline styles
* Mobile-first responsive design



# Content Management

Most editable content should live in `/data`.

Examples:

* Add new projects
* Update experience
* Change skills
* Update links

Avoid hardcoding content directly in UI components.



# SEO Guidelines

Every page should define:

* title
* meta description
* social preview image
* semantic headings
* readable URLs



# Performance Guidelines

Keep the site fast.

Recommended:

* Compress images
* Avoid heavy dependencies
* Lazy load non-critical sections
* Keep animations subtle
* Minimize bundle size



# Design Philosophy

The portfolio should feel:

* Premium
* Modern
* Clean
* Confident
* Intentional

Avoid clutter.



# Deployment

Recommended platform: **Vercel**

Workflow:

1. Push to main branch
2. Automatic deployment
3. Preview deployments for branches / PRs



# Common Tasks

## Add new project

Edit:

```text
/data/projects.ts
```

## Replace resume

Update file inside:

```text
/ public /
```

## Update hero text

Edit Hero section component or content source.



# Onboarding Notes

Before making changes, read:

```text
/docs/ARCHITECTURE.md
/docs/DESIGN.md
/docs/AGENTS.md
```

Important:

* This is a branding product, not only a website.
* First impression matters.
* Small UI regressions matter.
* Performance matters.



# Coding Standards

* Prefer strict TypeScript
* Reusable components first
* Semantic HTML
* Accessible interactions
* Small focused components



# Feature Priorities

Good additions:

* Better project case studies
* Improved contact conversion
* Better storytelling
* SEO improvements
* Performance improvements

Avoid:

* Gimmicks
* Heavy animations
* Random widgets
* Unnecessary dependencies



# Owner

Gabriel Peredo
