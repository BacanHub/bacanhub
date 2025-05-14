# BACAN - Landing Page

A modern landing page for BACAN, designed to showcase our company's transformation services for Argentine businesses.

## Project Overview

This project is a static landing page built with React, TypeScript, and Tailwind CSS. It features:

- Responsive design for all devices
- Modern UI components using Radix UI
- Animated sections on scroll
- Contact form functionality
- SEO optimizations

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Radix UI Components
- GitHub Pages for deployment

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bacanhub/bacanhub.git
   cd bacanhub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The site will be available at http://localhost:5173

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate static files in the `dist` directory.

## Deployment

### Manual Deployment

You can deploy manually using the following command:

```bash
npm run deploy
```

This will build the project and push it to the gh-pages branch of your repository.

### Automatic Deployment

This project is configured with GitHub Actions for automatic deployment. When you push to the `main` branch, the site will automatically be built and deployed to GitHub Pages.

To manually trigger a deployment, go to the 'Actions' tab in your GitHub repository and select the 'Deploy to GitHub Pages' workflow, then click 'Run workflow'.

## Project Structure

```
bacanhub/
├── client/             # Frontend code
│   ├── src/            # Source files
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page components
│   │   ├── assets/     # Static assets
│   │   └── lib/        # Utility functions
│   └── index.html      # HTML entry point
├── dist/               # Build output
└── public/             # Static files
```

## Responsive Design

This landing page is fully responsive and adapts to all screen sizes. For detailed information about the responsive implementation, check the [RESPONSIVE_DOCS.md](./RESPONSIVE_DOCS.md) file.

Key features:
- Mobile-first design approach
- Flexible layouts using Flexbox and CSS Grid
- Optimized for various device sizes (mobile, tablet, desktop)
- Performance optimizations for different network conditions

## Cross-Browser Testing

The site has been tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The site includes several performance optimizations:
- Image optimization with lazy loading
- CSS optimization with Tailwind's purge feature
- Efficient bundle splitting
- Content-visibility for improved rendering performance

## Next Steps

- Add analytics integration
- Add internationalization support
- Optimize images and assets further
- Implement structured data for better SEO

## License

MIT
