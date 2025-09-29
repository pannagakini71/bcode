import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './assets/styles/main.css';


function App() {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <HeroSection />
        <FeatureCards />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
