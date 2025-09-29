
import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/styles/logo.png';


function HeroSection() {
  return (
    <>
      <section className="hero" role="banner">
        <h1 className="hero-title">Achieve Your Dream IELTS Band</h1>
        <p className="hero-subtext">
          Join our expert-led courses, practice with real mock tests, and get AI-powered feedback to boost your IELTS score.
        </p>
        <button className="hero-btn" aria-label="Start your IELTS journey">Get Started</button>
        <img src={heroImg} alt="IELTS Institute Banner" className="hero-image" />
      </section>
    </>
  );
}

export default HeroSection;
