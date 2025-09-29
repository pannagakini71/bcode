import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';


describe('HeroSection', () => {
  test('renders hero title', () => {
    render(<HeroSection />);
    const titleElement = screen.getByText(/Achieve Your Dream IELTS Band/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders hero subtitle', () => {
    render(<HeroSection />);
    const subtitleElement = screen.getByText(/Join our expert-led courses/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders get started button', () => {
    render(<HeroSection />);
    const buttonElement = screen.getByRole('button', { name: /Get Started/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders hero image with alt text', () => {
    render(<HeroSection />);
    const imageElement = screen.getByAltText(/IELTS Institute Banner/i);
    expect(imageElement).toBeInTheDocument();
  });
});

