# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Nandini Agarwal Portfolio (`artifacts/nandini-portfolio`)
- **Type**: React + Vite (static, no backend)
- **Preview Path**: `/`
- **Description**: Creative personal portfolio for Nandini Agarwal — journalist & media professional
- **Features**:
  - Dark cinematic theme with gold (#f59e0b) and purple (#a855f7) accents
  - Playfair Display serif + Inter sans-serif fonts
  - Custom animated cursor with lag-follow ring
  - Canvas particle system with connected dots
  - CSS 3D animated orb in hero (WebGL fallback for Three.js)
  - Typewriter role animation in hero
  - Scroll-triggered reveal animations (IntersectionObserver)
  - Glitch hover effect on name
  - Timeline experience section
  - Full projects section: News articles, Interviews (with YouTube links), Short Films/Documentaries
  - Publications section with book chapter details
  - Awards & achievements section with marquee
  - Contact section
- **Profile Photo**: `public/nandini.jpeg` (copied from attached_assets)
- **Dependencies**: three, @react-three/fiber, @react-three/drei, gsap, framer-motion, @studio-freight/lenis
