# Praxso Olive Frontend

A premium health-tech landing page for the Olive Food Scanner application. This project features a modern, high-performance interface designed to showcase food scanning capabilities and expert-backed nutritional insights.

## Live Deployment
The project is live at: https://praxso-olive-frontend.netlify.app/

## Core Features
- Optimized Asset Pipeline: All images are served in WebP format for superior performance and faster load times.
- Responsive Design: Fully optimized for mobile, tablet, and desktop viewports.
- Interactive UI: Features fluid motion using Framer Motion and an optimized product carousel.
- Clean Architecture: Built as a Vite Single Page Application (SPA) using TanStack Router for efficient client-side navigation.

## Technology Stack
- Framework: React 19
- Language: TypeScript
- Build Tool: Vite
- Routing: TanStack Router
- Styling: TailwindCSS
- Animation: Framer Motion
- UI Components: Radix UI / Lucide React

## Development

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
The production-ready files will be generated in the `dist/client` directory.

## Deployment Configuration
The project is configured for deployment on Netlify via the `netlify.toml` file, which handles SPA redirects and build path mapping to ensure seamless navigation.
