# Fazel Ahad - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, clean UI with dark/light theme
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized
- 📄 Multiple pages: Home, About, Projects, Photography, Contact
- 🌙 Dark/Light mode toggle
- 📋 Sticky navigation with smooth scroll
- 🎯 Custom 404 page

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- next-themes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Setup Instructions

1. **CV File**: Add your CV/Resume PDF file to the `public` folder and name it `cv.pdf`. The "Download CV" button on the home page will automatically link to it.

2. **Contact Email**: Update the email address in `src/app/contact/page.tsx` with your actual email address.

3. **Social Links**: Update the GitHub and LinkedIn links in `src/app/contact/page.tsx` with your actual profiles.

4. **Project Images**: The project images are currently using placeholder images from Unsplash. You can replace them in `src/data/projects.ts` with your actual project screenshots.

5. **Photography Images**: Replace the placeholder images in `src/app/photography/page.tsx` with your actual photography work.

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # Reusable React components
    ui/            # shadcn/ui components
  data/            # Data files (projects, etc.)
  lib/             # Utility functions
public/            # Static assets (CV, images, etc.)
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be live!

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.ts` and `src/app/globals.css`
- **Content**: Update project data in `src/data/projects.ts`
- **Styling**: Modify components in `src/components/` directory
- **Theme**: Theme colors are defined in `src/app/globals.css` using CSS variables

