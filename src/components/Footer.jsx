import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">IELTS Institute</div>
        <nav className="footer-nav">
          <a href="#privacy">Privacy Policy</a>
        </nav>
      </div>
      <div className="footer-contact">
        <span>Contact: <a href="mailto:info@ieltsinstitute.com">info@ieltsinstitute.com</a></span>
        <span>Phone: +08183 220087</span>
      </div>
      <div className="footer-social">
        <a href="#" aria-label="Facebook">🌐</a>
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="Instagram">📸</a>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;