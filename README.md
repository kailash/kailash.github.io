# Portfolio

## Purpose

A simple, responsive personal portfolio website built [Just experimenting].

## Tech Stack

- **Frontend Framework**: React(TypeScript), Vite
- **UI Components**: 
  - shadcn/ui
  - Material UI (MUI) 7.3 
  - Lucide React, Font Awesome 7.1
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
