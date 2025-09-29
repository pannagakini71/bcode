# IELTS Institute Homepage

This project is a modern and professional homepage for a fictional IELTS Institute, built using React.js. The design is responsive and includes all required sections: Navbar, Hero, Feature Cards, Testimonials, Contact, and Footer. It focuses on clean UI with modular components and custom CSS for a polished look.

## Repository

GitHub Repo:https://github.com/pannagakini71/bcode

## Project Structure

The project is organized as follows:

```
ielts-institute-homepage
├── public/
│   └── index.html          # Main HTML entry point for React
├── src/
│   ├── components/         # React components and their CSS
│   │   ├── FeatureCards.jsx    # Feature cards section (4 cards: Speaking, Mock Tests, AI Band Score, Personalized Coaching)
│   │   ├── FeatureCards.css    # Styles for feature cards (centered cards, left-aligned heading)
│   │   ├── Navbar.jsx         # Navigation bar (logo, links, mobile toggle)
│   │   ├── Navbar.css         # Navbar styles (scroll effects, responsive)
│   │   ├── HeroSection.jsx    # Hero section (headline, subtext, button, image)
│   │   ├── HeroSection.css    # Hero styles (gradient background, animations)
│   │   ├── Testimonials.jsx   # Student testimonials (3 reviews with stars)
│   │   ├── Testimonials.css   # Testimonials styles
│   │   ├── ContactSection.jsx # Contact form (inputs, button)
│   │   ├── ContactSection.css # Contact styles (gradient background for prominence)
│   │   ├── Footer.jsx         # Footer (links, contact, social icons)
│   │   └── Footer.css         # Footer styles
│   ├── assets/
│   │   └── styles/
│   │       ├── main.css       # Global styles (body, fonts, utilities)
│   │       └── logo.png       # Logo image for navbar/hero
│   ├── App.jsx                # Main app component (renders all sections)
│   └── index.js               # React entry point
├── package.json               # Dependencies and scripts (React 17, react-scripts)
├── README.md                  # This file: overview, setup, design notes
└── build/                     # Generated build folder (after npm run build)
```

## Installation Instructions

1. **Prerequisites**:
   - Node.js (v16+ recommended; project uses v16.20.2).
   - npm (v8+).

2. **Clone the Repository**:
   ```
   git clone https://github.com/pannagakini71/bcode
   cd ielts-institute-homepage
   ```

3. **Install Dependencies**:
   ```
   npm install
   ```
   - This installs React, react-scripts, and dev dependencies like @testing-library/react.
   - Note: If peer dependency issues arise (e.g., React 17 vs. 18), use `--legacy-peer-deps`.
   - Run `npm audit fix` to address vulnerabilities (some may require `--force` for breaking changes).

4. **Start the Development Server**:
   ```
   npm start
   ```
   - Opens http://localhost:3000 in your browser.
   - Hot-reloads on file changes.
  

   ## Features
- **Hero Section**: Prominent call-to-action with title, subtitle, button, and institute logo.
- **Navigation Bar**: Simple menu for Features, Testimonials, Contact, and Enroll Now.
- **Feature Cards**: Highlight key offerings (expert courses, mock tests, AI feedback) – pre-styled for easy addition.
- **Testimonials**: User reviews section.
- **Contact Section**: Form for inquiries.
- **Footer**: Links and copyright.
- **Error Handling**: ErrorBoundary for robust rendering.
- **Testing**: Basic unit tests for HeroSection using React Testing Library.

## Technologies Used
- **Frontend**: React (v17.0.2), Create React App (CRA).
- **Styling**: CSS modules (e.g., HeroSection.css) with Flexbox for layout, media queries for responsiveness.
- **Testing**: Jest, React Testing Library (@testing-library/react@^12.1.5).
- **Build Tools**: react-scripts for development server, bundling, and testing.
- **Other**: No external UI libraries; uses native CSS for animations and gradients.

## Design Choices
- **Visual Design**: Professional blue-white color scheme (primary: #007bff, secondary: #6c757d) to convey trust and education. Linear gradients on buttons and hero background for modern appeal. Subtle shadows (box-shadow) and rounded corners (border-radius: 10px) for depth without overwhelming.
- **Typography**: Sans-serif fonts (e.g., system defaults) with scalable sizes: Hero title 3rem (scales to 2rem/1.3rem on mobile), subtext 1.3rem (to 1rem). Ensures readability across devices.
- **Responsiveness**: Mobile-first approach with media queries:
  - `@media (max-width: 700px)`: Adjusts hero layout, reduces font sizes, stacks elements.
  - `@media (max-width: 500px)`: Further optimizes for small screens (e.g., image max-width: 95vw, button padding: 12px 24px).
  - Flexbox for centering (hero) and wrapping (features-list with gap: 20px).
- **Animations & Interactivity**: CSS transitions (0.3s ease) for hover effects (button scale, card lift). Fade-in animations on load for engagement. No JavaScript animations to keep it lightweight.
- **Accessibility**: Semantic HTML (<main>, <section role="banner">), alt text for images, ARIA labels (e.g., aria-label on buttons), focus-visible styles. Color contrast meets WCAG AA (checked via browser tools).
- **Performance**: Lightweight CSS (no heavy frameworks), lazy loading potential via CRA. Hot-reload during dev for quick iterations.
- **Clean Code Principles**: Functional components, JSDoc comments, modular CSS. ErrorBoundary prevents crashes. Tests cover key renders.

Feel free to customize (e.g., add real images, integrate backend for form submission). For issues, check console or contact via repo.
