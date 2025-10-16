# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with TypeScript, Vite, and Tailwind CSS v4. It's a landing page for a web development service ("HazMiWeb") offering website creation services. The app is written in Spanish and features a responsive design with sections for hero/intro, services, and contact form. The project has been refactored into a modular component architecture for better scalability and maintainability.

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

The project follows a modular component architecture:

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout
│   ├── sections/        # HeroSection, ServicesSection, ContactSection
│   ├── ui/              # Button, Input, TextArea, ServiceCard
│   └── forms/           # ContactForm, SuccessMessage
├── hooks/               # useForm, useScrollTo, useMobileMenu
├── utils/               # constants, validation
├── types/               # TypeScript interfaces
├── App.tsx              # Main app with routing (refactored to ~43 lines)
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

- **`public/`** - Static assets including the HazMiWeb logo
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

### Modular Component Architecture
The application has been refactored from a single-component design (~410 lines) into a modular architecture with separate components for each section. This improves maintainability, reusability, and scalability.

### State Management
- Uses React `useState` hooks for local state
- Custom hooks (`useForm`, `useScrollTo`, `useMobileMenu`) encapsulate logic
- No external state management library (Redux, Zustand, etc.)
- Form state managed by `useForm` hook
- UI state managed by individual components

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

## Enhancement Guides

### Refactoring (Completed)
The project has been successfully refactored from a single-component architecture to a modular design. See **`REFACTORING_GUIDE.md`** for the complete documentation of this process, including:
- Component breakdown and organization
- Custom hooks implementation
- Reusable UI components
- Best practices for scalability

### Expansion and Improvements
For making the project larger, more modern, and professional, see **`ENHANCEMENT_GUIDE.md`** which provides step-by-step instructions for:

**Phase 1: Animations**
- Framer Motion integration
- Reusable animation components (FadeIn, ScaleIn, Parallax)
- Hover effects and transitions

**Phase 2: New Sections**
- Testimonials section
- Pricing/Plans section
- Portfolio with filterable projects
- FAQ accordion section

**Phase 3: Navigation**
- React Router implementation
- Multi-page architecture
- Blog page and additional routes

**Phase 4: Visual Improvements**
- Glass morphism effects
- Animated gradients
- Custom cursor (optional)
- Scroll progress bar
- Loading screen

**Phase 5: Professional Features**
- Chat widget
- Newsletter popup
- Lazy loading images
- SEO optimization

**Phase 6: Backend (Optional)**
- Firebase integration
- Contact form database storage
- Analytics

**Phase 7: Performance**
- Code splitting
- Image optimization
- Bundle size optimization

Refer to `ENHANCEMENT_GUIDE.md` for complete code examples and implementation details.
