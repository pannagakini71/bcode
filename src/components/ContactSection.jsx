import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <p>Ready to start your IELTS journey? Contact us for more information.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
