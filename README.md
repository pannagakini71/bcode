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

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/pannagakini71/bcode.git
   cd ielts-institute-homepage
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   - Opens at http://localhost:3000 (or 3001 if port conflicted).
   - Hot-reloads for live changes.

4. Build for production:
   ```
   npm run build
   ```
   

## Design Choices

- **Section-Specific Notes**:
  - **Navbar**: Fixed on scroll, responsive toggle; links to sections (#features, #testimonials, #contact).
  - **Hero**: Centered content with fade-in animation; includes logo image and CTA button.
  - **Features**: Left-aligned heading ("Our Features") for dynamic feel; 4 centered cards with icons, compact sizing, hover lifts. Emojis for icons (🗣️, 📝, 🤖, 👩‍🏫).
  - **Testimonials**: 3 cards with 5-star ratings (⭐ emojis), italic quotes for authenticity.
  - **Contact**: Simple form after testimonials for CTA flow; light gradient background for separation.
- **UI Focus**: No backend; static React for fast loading. Custom CSS (no Tailwind/Bootstrap) for full control and lightness.
- **Accessibility**: ARIA labels on icons/buttons, semantic HTML (sections, nav), focus styles on interactive elements.

Feel free to customize (e.g., add real images, integrate backend for form submission). For issues, check console or contact via repo.
