# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
npm run dev        # Start development server on port 8080
```

**Build Commands:**
```bash
npm run build      # Production build
npm run build:dev  # Development build
npm run preview    # Preview built app
```

**Code Quality:**
```bash
npm run lint       # Run ESLint for code quality checks
```

**Install Dependencies:**
```bash
npm i              # Install all dependencies
```

## Project Architecture

This is a **React TypeScript SPA** built with Vite that appears to be a visual game/room-based application with mobile support. Key architectural patterns:

### Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **UI Library:** shadcn/ui components with Radix UI primitives
- **Styling:** Tailwind CSS with custom 8-bit themed components
- **State Management:** React Query (@tanstack/react-query) for server state
- **Routing:** React Router DOM with file-based page structure
- **Mobile:** Capacitor for native mobile app capabilities
- **Animations:** Framer Motion for advanced animations
- **Theming:** next-themes for dark/light mode

### Code Organization

**Component Structure:**
- `src/components/ui/` - shadcn/ui base components + custom 8-bit variants in `ui/8bit/`
- `src/components/` - Feature-specific components organized by domain:
  - `animation/` - CountUp, TypewriterText
  - `auth/` - Authentication components
  - `game/` - Game-specific UI components
  - `grid/` - Image grid components with responsive layouts
  - `interactions/` - Micro-interactions and style guides
  - `landing/` - Landing page components
  - `layout/` - App-wide layout components (Header, ThemeProvider)
  - `mobile/` - Mobile-specific components (gestures, PWA, bottom sheets)
  - `retro/` - Retro/8-bit styled components
  - `room/` - Room management components

**Feature Structure:**
- `src/features/game/` - Game feature with phases (Prompt, Voting, Results, etc.)

**Pages Structure:**
- `src/pages/` - Route components (Index, Room, GameClient, Dashboard, etc.)

**Utilities:**
- `src/hooks/` - Custom React hooks for mobile detection, gestures, timers, etc.
- `src/lib/utils.ts` - Utility functions using clsx and tailwind-merge
- `src/types/` - TypeScript type definitions

### Key Patterns

**Component Composition:** Uses shadcn/ui pattern with compound components and slot-based composition via Radix UI

**Mobile-First Design:** Extensive mobile components and hooks suggest this is designed as a mobile-first experience with PWA capabilities

**Game Architecture:** Features suggest this is a room-based game with phases (prompting, voting, results) and real-time interactions

**Theme System:** Dual theming with standard light/dark themes plus custom 8-bit/retro styling variants

**Animation System:** Framer Motion integration for micro-interactions and page transitions

## Path Aliases

Uses `@/` alias pointing to `src/` directory. Import components like:
```typescript
import { Button } from "@/components/ui/button"
import { useTimer } from "@/hooks/useTimer"
```

## Mobile Development

**Capacitor Configuration:** Configured for iOS/Android builds with haptic feedback support

**PWA Features:** Includes install prompts and mobile-optimized components

**Gesture Support:** Custom gesture hooks and swipeable components for mobile interactions

## Lovable Integration

This project appears to be built with Lovable platform integration:
- Uses `lovable-tagger` for development mode component tagging
- Has Lovable project URL and deployment configuration
- Changes made via Lovable are automatically committed to this repo