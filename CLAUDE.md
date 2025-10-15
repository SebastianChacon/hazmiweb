# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page React application built with TypeScript, Vite, and Tailwind CSS v4. It's a landing page for a web development service ("WebPro") offering website creation services. The app is written in Spanish and features a responsive design with sections for hero/intro, services, and contact form.

## Tech Stack

- **React 19.1.1** with TypeScript (strict mode)
- **Vite 7.1.7** as build tool and dev server
- **Tailwind CSS 4.1.14** (using the new v4 Vite plugin)
- **React Compiler** (babel-plugin-react-compiler) - enabled for automatic optimization
- **Lucide React** for icons
- **ESLint** with TypeScript support

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

- **`src/App.tsx`** - Main application component containing all page sections (navbar, hero, services, contact form, footer). This is a single-component architecture - all UI logic is in one file.
- **`src/main.tsx`** - Application entry point that mounts the React app
- **`src/index.css`** - Global styles (minimal, relies on Tailwind)
- **`src/App.css`** - Component-specific styles (if needed)
- **`public/`** - Static assets served as-is
- **`index.html`** - HTML template

## Key Configuration Files

### TypeScript Configuration
- **`tsconfig.json`** - Root config with project references
- **`tsconfig.app.json`** - App-specific TypeScript config with strict mode enabled
- **`tsconfig.node.json`** - Node/build tools TypeScript config

### Build & Dev Tools
- **`vite.config.ts`** - Vite configuration with:
  - `@vitejs/plugin-react` with React Compiler enabled
  - `@tailwindcss/vite` plugin for Tailwind v4

- **`eslint.config.js`** - ESLint flat config with:
  - TypeScript ESLint
  - React Hooks rules
  - React Refresh rules for Vite

## Architecture Notes

### Single Component Design
The entire application is contained in a single `App.tsx` component (~410 lines). This is intentional for a simple landing page and makes the code easy to navigate. All state management, form handling, and UI sections are in this one component.

### State Management
- Uses React `useState` hooks for local state
- No external state management library (Redux, Zustand, etc.)
- Form state: `formData`, `errors`, `isSubmitted`
- UI state: `isMenuOpen` for mobile navigation

### Styling Approach
- Uses Tailwind CSS v4 (note: this is the newer version with different setup)
- Inline utility classes throughout components
- Gradient backgrounds and modern design patterns
- Responsive design with mobile-first approach using Tailwind breakpoints (`md:`, `sm:`, `lg:`)

### Form Handling
The contact form includes:
- Client-side validation (required fields, email format)
- Error display with inline error messages
- Success state with auto-reset after 3 seconds
- Form does NOT actually submit to a backend (mock submission only)

## React Compiler

This project uses the React Compiler (formerly React Forget) which automatically optimizes React components. This means:
- Manual `useMemo` and `useCallback` optimizations are often unnecessary
- The compiler handles memoization automatically
- May impact build/dev performance slightly

## Important Conventions

### Language
- UI text is in Spanish ("Inicio", "Servicios", "Contacto", etc.)
- Variable names and code comments should follow English conventions
- Form validation messages are in Spanish

### Smooth Scrolling
Navigation uses `scrollIntoView({ behavior: "smooth" })` for smooth section navigation instead of hash routing.

### Icons
All icons come from `lucide-react`. To add new icons, import from `lucide-react` and use as React components.

## Testing

No testing framework is currently set up in this project. To add tests, consider:
- Vitest (recommended for Vite projects)
- React Testing Library
- Playwright or Cypress for E2E tests

## Deployment

The build output goes to `dist/` directory. This is a static site and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Run `npm run build` to generate production-ready files.

## Refactoring to Component Architecture

The current codebase uses a single-component architecture which is great for getting started but may not scale well. There is a comprehensive refactoring guide available in **`REFACTORING_GUIDE.md`** that provides:

- Step-by-step instructions to break down `App.tsx` into modular components
- Proposed folder structure (components, hooks, utils, types)
- Complete code examples for each new component
- Custom hooks for form handling, navigation, and mobile menu
- Reusable UI components (Button, Input, TextArea, ServiceCard)
- Best practices for scalability and maintainability

**When to refactor:**
- When adding multiple new pages or sections
- When the team grows beyond 1-2 developers
- When components need to be reused in different contexts
- When the App.tsx file becomes difficult to navigate (it's already ~410 lines)

Refer to `REFACTORING_GUIDE.md` for the complete migration path.
