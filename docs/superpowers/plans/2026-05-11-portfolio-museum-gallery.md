# Portfolio Museum Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current generic project cards with a curated museum-style gallery using real screenshots from the projects in `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales`.

**Architecture:** Capture assets are generated outside the app and saved under `public/projects/<slug>/`. Portfolio project data becomes explicit structured content with cover image, details, stack, role, and links. The UI stays inside the existing Next app and follows the current dark editorial visual system.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, `next/image`, Chrome/Playwright for screenshots.

---

### Task 1: Project Inventory And Capture Readiness

**Files:**
- Read: `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\**\package.json`
- Create: `docs/projects-gallery-inventory.md`

- [ ] **Step 1: List project roots**

Use these roots:

```text
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Arquitectura\arquitectura-template
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Budongsan
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Egao
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Estudio Navarro
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\MiniStock\client
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Portfolio Arquitect
C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\StanFit\stanfit
```

- [ ] **Step 2: Record each app's start command**

For each project, capture package name, framework, `dev` command, expected port, and whether backend/data is required.

- [ ] **Step 3: Pick the first capture batch**

Start with `Budongsan` and `Egao` because both are standalone Next apps and likely show strongest marketing visuals without database setup.

### Task 2: Screenshot Pipeline

**Files:**
- Create: `scripts/capture-projects.mjs`
- Create folders: `public/projects/<slug>/`

- [ ] **Step 1: Start a target app on a fixed port**

Run one app at a time with:

```powershell
npm run dev -- -p 4101
```

For Vite apps:

```powershell
npm run dev -- --host 127.0.0.1 --port 4101
```

- [ ] **Step 2: Capture consistent screenshots**

Use Chrome/Playwright with:

```text
desktop viewport: 1440x1000
mobile viewport: 390x844
cover crop: above-the-fold hero or strongest first viewport
detail crop: strongest section proving UI quality
```

- [ ] **Step 3: Save assets**

Use this naming pattern:

```text
public/projects/budongsan/cover.png
public/projects/budongsan/detail-1.png
public/projects/budongsan/mobile.png
```

### Task 3: Portfolio Data Model

**Files:**
- Create: `src/data/portfolio-projects.ts`

- [ ] **Step 1: Define project data**

Each project entry should include:

```ts
export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  cover: string;
  details: string[];
  liveUrl?: string;
  repoUrl?: string;
}
```

- [ ] **Step 2: Add initial entries**

Add entries only for projects with verified screenshots. Do not invent live URLs or claims.

### Task 4: Museum Gallery UI

**Files:**
- Modify: `src/components/projects.tsx`
- Modify: `src/components/projects-web.tsx`
- Optional create: `src/components/project-museum-card.tsx`

- [ ] **Step 1: Replace generic project data**

Use real project data from `src/data/portfolio-projects.ts`.

- [ ] **Step 2: Render museum cards**

Each card shows:

```text
large framed cover image
small caption line
project title
short summary
stack tags
optional live/repo links
```

- [ ] **Step 3: Keep layout restrained**

Use the existing dark editorial style. Avoid nested cards, heavy animations, and noisy gradients.

### Task 5: Verification

**Files:**
- Read: rendered app in browser

- [ ] **Step 1: Run checks**

```powershell
npm run lint
npm run build
```

- [ ] **Step 2: Visual QA**

Open the portfolio locally and check:

```text
desktop 1365x900
mobile 390x844
home project section
/proyectos page
image loading and crop quality
link targets
```

- [ ] **Step 3: Report**

Report changed files, generated assets, commands run, checks passed or failed, and remaining projects not yet captured.
