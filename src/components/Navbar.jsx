import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="navbar-logo">IELTS Institute</a>
      <div
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        tabIndex={0}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <a href="#features" className="navbar-link" onClick={handleLinkClick}>Features</a>
        <a href="#testimonials" className="navbar-link" onClick={handleLinkClick}>Testimonials</a>
        <a href="#contact" className="navbar-link" onClick={handleLinkClick}>Contact</a>
        <a href="#enroll" className="navbar-link navbar-cta" onClick={handleLinkClick}>Enroll Now</a>
      </div>
    </nav>
  );
}

export default Navbar;