# Learning Dashboard

A futuristic, animated student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Next.js 15** (App Router)
- **Supabase** (PostgreSQL database)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Architecture Decisions

### Server/Client Component Split
- `CourseGrid.tsx` is a **Server Component** — fetches data directly from Supabase using server-side credentials
- `CourseCard.tsx`, `Sidebar.tsx`, `HeroTile.tsx`, `ActivityTile.tsx` are **Client Components** — handle animations and interactions

### Data Fetching
- Supabase is queried server-side inside `CourseGrid.tsx`
- `React Suspense` boundaries show skeleton loaders while data loads
- Error handling returns empty array if database connection fails

### Animations
- Framer Motion spring physics used throughout (`stiffness: 300, damping: 20`)
- Staggered card entrance animations
- `layoutId` used in Sidebar for smooth active state transitions
- All animations use `transform` and `opacity` only — zero layout shifts

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Copy `.env.example` to `.env.local` and add your Supabase credentials:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Environment Variables

See `.env.example` for required variables.

## Deployment

Deployed on Vercel. See live demo: [link]