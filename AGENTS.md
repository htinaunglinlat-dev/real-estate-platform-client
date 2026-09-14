<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Real Estate Client UI

A modern frontend application for a real estate platform.  
This project provides the user interface for browsing, searching, viewing, and interacting with property-related content.

This application is responsible only for the frontend layer. Backend services, APIs, authentication services, and business logic are handled separately.

---

# Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS v4 |
| UI Library | shadcn/ui (Radix UI primitives) |
| Icons | lucide-react |
| State Management | Zustand |
| Server State | TanStack React Query v5 |
| HTTP Client | Axios |
| Forms | React Hook Form + Zod |
| Notifications | sonner |
| Date Handling | date-fns |
| Animation | framer-motion |
| Theme | next-themes |

---

# Project Structure

```
real-estate-client-ui/

├── api/
│   ├── axios-instance.ts
│   └── property.ts
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── provider.tsx
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   │
│   └── (root)/
│       ├── layout.tsx
│       ├── page.tsx
│       └── property/
│           ├── page.tsx
│           └── [id]/
│               └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── card/
│   └── common/
│
├── config/
│   └── config.ts
│
├── hooks/
│   └── use-property.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── store/
│   └── use-auth-store.ts
│
└── types/
    ├── property.ts
    ├── user.ts
    └── response-model.ts
```

---

# File Naming Convention

This project follows **lowercase kebab-case naming**.

## Rules

- No PascalCase filenames
- No camelCase filenames
- Use kebab-case for all files and folders

Examples:

✅ Correct

```
property-card.tsx
use-property.ts
axios-instance.ts
response-model.ts
```

❌ Incorrect

```
PropertyCard.tsx
useProperty.ts
AxiosInstance.ts
```

---

# Component Convention

Components should be separated based on responsibility.

Example:

```
components/

├── ui/
│   └── button.tsx

├── layout/
│   ├── header.tsx
│   └── footer.tsx

├── card/
│   └── property-card.tsx

└── common/
    └── empty-state.tsx
```

---

# Data Flow Architecture

The project follows a predictable data flow:

```
API Response
      |
      ↓
types/
      |
      ↓
api/
      |
      ↓
hooks/
      |
      ↓
page/component
```

Example:

```
types/property.ts

        ↓

api/property.ts

        ↓

hooks/use-property.ts

        ↓

property/page.tsx
```

---

# API Layer

All backend communication should be handled inside the `api` folder.

Example:

```
api/

axios-instance.ts
property.ts
user.ts
```

Rules:

- Use the shared Axios instance
- Do not call APIs directly inside components
- Keep API functions separated by domain

---

# React Query Convention

Server-side data fetching should use TanStack Query.

Example:

```
hooks/

use-property.ts
use-user.ts
```

Responsibilities:

- Fetch API data
- Handle caching
- Handle loading state
- Handle error state

---

# State Management

## Server State

Managed by:

```
TanStack React Query
```

Examples:

- Property list
- Property details
- User profile
- Search results


## Client State

Managed by:

```
Zustand
```

Examples:

- Authentication state
- UI preferences
- Temporary application state

---

# Type Declaration

All shared TypeScript types should be placed inside:

```
types/
```

Example:

```typescript
export interface Property {
  id: string;
  title: string;
  price: number;
}
```

Avoid:

```typescript
declare interface Property {}
```

Use exported interfaces/types.

---

# Environment Variables

Create:

```
.env.local
```

Example:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

Configuration should be accessed through:

```
config/config.ts
```

---

# Loading State

Avoid generic loading indicators.

Do not use:

```
Loading...
```

or

```
Full page spinner
```

Use skeleton UI matching the final layout.

Examples:

- Property card skeleton
- Detail page skeleton
- Image placeholder skeleton

This improves perceived performance and user experience.

---

# Styling Guidelines

Use:

- Tailwind CSS utilities
- shadcn/ui components
- CSS variables for themes

Avoid:

- Inline styles
- Random CSS files
- Duplicate UI components

Before creating a new component, check whether an existing shadcn/ui component can be reused.

---

# Development Scripts

```bash
pnpm dev

# Development server

pnpm build

# Production build

pnpm start

# Start production server

pnpm lint

# Run ESLint
```

---

# Adding a New Feature

Follow this order:

1. Define types

```
types/
```

2. Create API functions

```
api/
```

3. Create React Query hooks

```
hooks/
```

4. Build UI components

```
components/
```

5. Add pages/routes

```
app/
```

---

# Development Principles

- Keep components small and reusable
- Separate business logic from UI
- Avoid unnecessary global state
- Prefer composition over duplication
- Keep naming consistent
- Build accessible UI components
- Optimize user experience and performance
