import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Micheal Brown",
    text: "The IELTS Institute helped me achieve my desired score! The instructors are knowledgeable and supportive.",
    stars: 5,
  },
  {
    name: "Rahul Sharma",
    text: "I had a great experience with the mock tests and speaking practice sessions. Highly recommend!",
    stars: 5,
  },
  {
    name: "Rina Lee",
    text: "The resources provided were invaluable. I felt well-prepared for the exam.It is a great institute.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} role="img" aria-label="star">⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-name">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;