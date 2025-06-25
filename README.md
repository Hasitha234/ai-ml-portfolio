# AI/ML Developer Portfolio

A modern, responsive portfolio website showcasing AI/ML projects and expertise. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with smooth animations
- 🎥 Video project showcases
- 📱 Fully responsive design
- 🌙 Dark/light mode
- ⚡ Optimized performance
- 🔍 SEO friendly
- 📊 Interactive skill bars
- 📅 Availability calendar
- 📝 Contact form with validation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **Database:** Prisma with PostgreSQL
- **Deployment:** Vercel
- **UI Components:** Custom components with Radix UI
- **Form Handling:** React Hook Form
- **Video Player:** React Player
- **Calendar:** React Day Picker
- **Icons:** Lucide React

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
   ```

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── 3d/            # Three.js components
├── lib/
│   ├── animations/     # Animation utilities
│   └── utils/         # Helper functions
└── styles/            # Global styles
```

## Customization

1. Update the content in `src/app/page.tsx`
2. Modify the theme in `tailwind.config.ts`
3. Add your projects in `src/components/sections/projects.tsx`
4. Update contact information in `src/components/sections/contact.tsx`

## Performance Optimization

- Images and videos are lazy loaded
- Fonts are preloaded
- Components are client/server split
- Animations are GPU accelerated
- Assets are optimized

## Deployment

The site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this for your own portfolio! 