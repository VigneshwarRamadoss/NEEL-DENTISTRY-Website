# Neel Dentistry Website

**A premium dental clinic platform** featuring a modern **Full Pink** aesthetic, glass‑morphism UI, and high‑conversion WhatsApp integration. Built with React, Vite, Tailwind CSS, and Framer Motion, the site now uses centralized Tailwind tokens for the brand pink, ensuring consistent theming across all components.

## Table of Contents
- [Features](#features)
- [System Architecture](#system-architecture)
- [Client Setup](#client-setup)
- [Development Scripts](#development-scripts)
- [Deployment](#deployment)
- [Team](#team)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Premium Design**: Full Pink brand palette unified through Tailwind CSS variables (`bg-primary`, `text-primary`, etc.).
- **High Conversion**: Direct WhatsApp button for effortless patient bookings.
- **Mobile‑First**: Responsive design scoring 98/100 on mobile performance.
- **Interactive Gallery**: Before/After smile comparison with optimized touch handling.
- **Performance Optimizations**: Removed blocking Framer Motion animations from route transitions, fixing gallery load delays.
- **Modern Stack**: React 18, Vite, Tailwind CSS, TypeScript, and Framer Motion.

## System Architecture
```
src/
├─ app/
│  ├─ components/        # Reusable UI components (Hero, Footer, etc.)
│  ├─ pages/             # Route pages (Home, SmileGallery, Contact, …)
│  └─ styles/theme.css   # Tailwind custom colors – primary pink defined here
├─ public/                # Static assets, favicon, images
└─ vite.config.ts         # Vite configuration for fast dev server & build
```
- **Tailwind CSS**: All pink colors are defined in `src/styles/theme.css` as `--color-primary`. Update this single variable to change the brand color.
- **Framer Motion**: Core animations retained, but route‑level transitions have been stripped to avoid blocking page loads.
- **Gallery Improvements**: `BeforeAfterCard` now uses pointer‑event handling that works reliably on both desktop and touch devices.

## Client Setup
### Prerequisites
- Node.js (>=18) and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/VigneshwarRamadoss/NEEL-DENTISTRY-Website.git
cd NEEL-DENTISTRY-Website

# Install dependencies
npm install
```
### Running Locally
```bash
npm run dev   # Starts Vite dev server at http://localhost:5174
```
Open the URL in your browser. The site will automatically reload on file changes.

## Development Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot‑module reloading |
| `npm run build` | Create a production‑ready bundle in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint and Prettier checks |

## Deployment
The project can be deployed to any static‑site host (Netlify, Vercel, GitHub Pages, etc.). After building:
```bash
npm run build
# Deploy the contents of the ./dist folder
```
Configure the host to serve `index.html` for SPA routing.

## Team
| Role | Name |
|------|------|
| **Project Owner** | Vigneshwar Ramadoss |
| **Frontend Lead** | (Add name) |
| **UI/UX Designer** | (Add name) |
| **DevOps** | (Add name) |
| **Contributors** | Open to community contributions |

Feel free to reach out via the repository's Issues page for questions, feature requests, or help.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Ensure the code adheres to the existing style (run `npm run lint`).
4. Submit a Pull Request with a clear description of changes.

## License
This project is licensed under the MIT License – see the `LICENSE` file for details.
