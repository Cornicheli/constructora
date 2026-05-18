# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual construction company website (Constructora) built with React, TypeScript, Vite, and Tailwind CSS. The site showcases two main business lines: construction services and swimming pool construction.

## Development Commands

-   `npm run dev` - Start development server with HMR
-   `npm run build` - Type check with `tsc` and build for production
-   `npm run preview` - Preview production build locally
-   `npm run lint` - Run ESLint with TypeScript support
-   `npm run format` - Format code with Prettier (includes Tailwind class sorting)

## Tech Stack

-   **Build Tool**: Vite with SWC for Fast Refresh
-   **Framework**: React 18 with TypeScript
-   **Routing**: React Router DOM v6
-   **Styling**: Tailwind CSS + Bootstrap + custom CSS
-   **UI Components**: React Bootstrap
-   **Carousels**: React Slick
-   **Icons**: React Icons

## Code Architecture

### Routing Structure

The application has 3 main routes defined in `src/App.tsx`:

-   `/` - Constructora page (construction services)
-   `/piscinas` - Swimming pools page
-   `/contact` - Contact form

### Component Organization

**Page Components** (`src/pages/`):

-   Pages compose multiple reusable components into full-page layouts
-   Each page includes shared components like `Footer`, `Nav`, and `WhatsappChat`

**Reusable Components** (`src/components/`):

-   `card/` - Various card components (CardAbout, CardService, CardTypologie, etc.)
-   `carrousel/` - Carousel components for different sections (CarrouselConstru, CarrouselPisci, CarrouselMultiPisci)
-   `modal/` - Modal dialogs (ModalPiscinas)
-   `Nav.tsx` - Global navigation header
-   `Footer.tsx` - Global footer
-   `FormContact.tsx` - Contact form
-   `WhatsappChat.tsx` - WhatsApp floating button
-   `index.ts` - Centralized component exports

**Assets** (`src/assets/`):

-   Organized by category in subdirectories (icon, image, piscinas, Carrusel)
-   Each subdirectory has an `index.ts` for centralized exports
-   Images grouped by construction phases: excavacion, marcado, armaduraAcero, hormigonado, revestimiento, finalizada
-   Video asset: `cascadaPiscina.mp4` used in Piscinas page

### Styling Approach

The project uses a **hybrid styling approach**:

1. **Tailwind CSS** - Primary utility-first CSS framework
2. **Bootstrap** - For specific UI components (React Bootstrap)
3. **Custom CSS** - Located in `src/style/` directory:
    - `card.css` - Card component styles
    - `cardPiscinas.css` - Pool-specific card styles
    - `footer.css` - Footer styles

### Code Style Configuration

**Prettier** (`.prettierrc`):

-   Tab width: 4 spaces
-   Single quotes
-   Trailing commas
-   Tailwind class sorting enabled via `prettier-plugin-tailwindcss`

**ESLint** (`.eslintrc.cjs`):

-   React Refresh plugin enabled
-   `react-refresh/only-export-components` rule disabled

## Important Patterns

1. **Centralized Exports**: Components and assets use `index.ts` files for clean imports
2. **Shared Layout Components**: Nav, Footer, and WhatsappChat appear on all pages
3. **Spanish Content**: UI text is in Spanish (construction company targets Spanish-speaking market)
4. **Video Assets**: Large video files are imported directly and used with HTML5 video elements
5. **Component Composition**: Pages are built by composing smaller, focused components

## Custom Agents

This project includes two specialized agents to help with UI development:

### Design Review Agent (`@design-review`)

Use this agent for comprehensive design reviews when:

-   Making significant UI changes or refactoring components
-   Before creating pull requests with UI modifications
-   You need to verify visual consistency and user experience quality
-   Testing responsive design across different viewports

The agent will systematically test interaction flows, responsiveness, accessibility (WCAG 2.1 AA), and visual polish.

### Premium UI Designer Agent (`@premium-ui-designer`)

Use this agent when you need to:

-   Enhance existing components with sophisticated styling and animations
-   Create premium visual effects and micro-interactions
-   Implement advanced CSS techniques for better visual hierarchy
-   Transform basic UI elements into polished, professional interfaces

Both agents are configured in `.claude/agents/` directory.

## Development Best Practices

When implementing UI features:

-   **Responsiveness**: Test on mobile (375px), tablet (768px), desktop (1440px+)
-   **Accessibility**: Use semantic HTML, ensure keyboard navigation, maintain proper contrast
-   **Performance**: Optimize images, lazy load components, minimize bundle size
-   **Consistency**: Follow existing patterns in the codebase, reuse components
-   **Spanish Content**: All user-facing text should be in Spanish
