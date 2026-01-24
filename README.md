# Portfolio

## Purpose

A modern, responsive personal portfolio website built to showcase professional experience, projects, and skills. Designed with a clean, professional aesthetic featuring interactive animations and a mobile-first responsive layout.

## Tech Stack

- **Frontend Framework**: React 19.2 with TypeScript 5.9
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 3.4 with custom configuration
- **UI Components**: 
  - shadcn/ui for base components (Button, Card, Badge, Avatar, etc.)
  - Material UI (MUI) 7.3 with MUI Lab 7.0 (Timeline component)
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React, Font Awesome 7.1
- **Forms**: React Hook Form 7.69
- **Code Quality**: ESLint 9.39 with TypeScript support, Husky with lint-staged
- **Database/CMS**: None (static site)
- **Deployment**: GitHub Pages

## Setup & Local Development

### Clone the repository
```bash
git clone https://github.com/kailash/kailash.github.io.git
cd kailash.github.io
```

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for production
```bash
npm run build
```

### Preview production build locally
```bash
npm run preview
```

### Run linting
```bash
npm run lint
npm run lint:fix  # Auto-fix linting issues
```

## Project Structure

```
src/
├── components/        # React components (Hero, About, Skills, Experience, Projects, Contact)
├── data/             # Content data (skills, experience, projects)
├── hooks/            # Custom React hooks (useScrollSpy, useMobile)
├── lib/              # Utility functions
├── config/           # Configuration files (navigation items)
├── theme/            # Theme configuration
└── App.tsx           # Root component
```

## Deployment

The site is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions pipeline.
