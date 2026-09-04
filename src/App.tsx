import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export const App: React.FC = () => {
  // Default to light mode matching the screenshot, with full dark mode support
  const [isLight, setIsLight] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync body class with theme selection
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [isLight]);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Background Architectural Grid Lines & Border Guidelines */}
      <div className="page-grid-guides" aria-hidden="true">
        <div className="guide-line guide-left"></div>
        <div className="guide-line guide-right"></div>
      </div>

      <Navbar
        isLight={isLight}
        setIsLight={setIsLight}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <main className="main-content-layout">
        {/* HERO */}
        <Hero />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* ABOUT */}
        <About />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* PROJECTS */}
        <Projects />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* WORK EXPERIENCE */}
        <Experience />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* TECH STACK */}
        <Skills />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* GITHUB ACTIVITY */}
        <GithubActivity />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* EDUCATION */}
        <Education />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* CERTIFICATIONS */}
        <Certifications />

        <div className="section-divider">
          <span className="cross-mark">+</span>
        </div>

        {/* CONTACT / HAVE AN IDEA? LET'S TALK */}
        <ContactCTA />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* COMMAND PALETTE MODAL */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        isLight={isLight}
        setIsLight={setIsLight}
      />
    </div>
  );
};

export default App;
