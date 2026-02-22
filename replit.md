# Replit Agent Guide

## Overview

This is a personal portfolio website for **Ankesh Kumar Pandey**, a Software Engineer / Full Stack Developer. It's a single-page application with a dark-themed, modern design featuring sections for Hero, About, Skills, Experience, Projects, Certifications, Achievements, and Contact. The site uses a React frontend with a Node.js/Express backend, backed by a PostgreSQL database that stores all portfolio content (projects, experiences, skills, etc.) and contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: `wouter` (lightweight client-side router) — single-page app with just `/` and a 404 page
- **Styling**: Tailwind CSS with a custom dark theme (deep blue/indigo color palette using CSS variables defined in `client/src/index.css`)
- **UI Components**: shadcn/ui component library (new-york style) — components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll reveals and micro-interactions
- **Typography**: DM Sans (body) and Outfit (display/headings) via Google Fonts
- **Data Fetching**: TanStack React Query with a custom `queryFn` that fetches from API routes using the query key as the URL path
- **Forms**: React Hook Form with Zod resolver for contact form validation

### Backend
- **Runtime**: Node.js with TypeScript (via `tsx`)
- **Framework**: Express 5
- **API Design**: REST API with routes defined in `shared/routes.ts` as a typed route map (`api` object with paths, methods, and Zod schemas). All routes are under `/api/` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Connection**: `pg` Pool using `DATABASE_URL` environment variable
- **Storage Layer**: `DatabaseStorage` class in `server/storage.ts` implements an `IStorage` interface — all DB operations go through this abstraction

### Shared Code
- `shared/schema.ts` — Drizzle table definitions and Zod insert schemas (single source of truth for types)
- `shared/routes.ts` — API route definitions with paths and Zod validation schemas, shared between client and server

### Database Schema (PostgreSQL via Drizzle)
Tables defined in `shared/schema.ts`:
- **messages** — Contact form submissions (name, email, message, createdAt)
- **projects** — Portfolio projects (title, description, technologies array, URLs, order)
- **experiences** — Work experience entries (role, company, duration, achievements array, order)
- **skills** — Technical skills (category, name, level, order)
- **education** — Education history (degree, college, year, location, cgpa, coursework array, order)
- **certifications** — Certs and training (name, issuer, and likely URL/date fields)
- **achievements** — Notable achievements (description, links array)

All content tables have an `order` integer column for display sorting.

### Build System
- **Development**: `tsx server/index.ts` runs the server with Vite dev middleware (HMR)
- **Production Build**: Custom `script/build.ts` — Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`
- **Database Migrations**: `drizzle-kit push` via `npm run db:push`
- **Seed Script**: `script/seed.ts` populates the database with Ankesh's actual portfolio data

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/projects` | List all projects |
| GET | `/api/experiences` | List all work experiences |
| GET | `/api/skills` | List all skills |
| GET | `/api/education` | List all education entries |
| GET | `/api/certifications` | List all certifications |
| GET | `/api/achievements` | List all achievements |
| POST | `/api/contact` | Submit a contact form message |

### Key Design Decisions
- **Database-driven content**: All portfolio content comes from the database rather than being hardcoded, allowing dynamic updates without redeployment
- **Storage interface pattern**: The `IStorage` interface in `server/storage.ts` abstracts database operations, making it possible to swap implementations
- **Shared types**: Schema and route definitions are shared between client and server via the `shared/` directory, ensuring type safety across the stack
- **CSS Variables for theming**: All colors use HSL CSS custom properties, making theme changes centralized in `index.css`

## External Dependencies

### Required Services
- **PostgreSQL Database**: Required. Connection via `DATABASE_URL` environment variable. Used for all portfolio data and contact messages. Must be provisioned before the app can start.

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit**: Database ORM and migration tooling
- **express**: Web server framework (v5)
- **@tanstack/react-query**: Client-side data fetching/caching
- **framer-motion**: Animation library
- **shadcn/ui ecosystem**: Radix UI primitives, class-variance-authority, tailwind-merge, clsx
- **zod** + **drizzle-zod**: Schema validation (shared between client form validation and server input validation)
- **wouter**: Client-side routing
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod integration
- **connect-pg-simple**: PostgreSQL session store (available but may not be actively used)

### Replit-specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner`: Development tooling (only loaded in non-production on Replit)