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

export const App: React.FC = () => {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync body class with theme selection
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLight]);

  // ⌘K hint — reserved for future command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // future: open command palette
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Persistent column guidelines framing the content */}
      <div className="col-guides"></div>

      <Navbar
        isLight={isLight}
        setIsLight={setIsLight}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <main>
        {/* HERO */}
        <Hero />

        <div className="hr"></div>

        {/* ABOUT */}
        <About />

        <div className="hr"></div>

        {/* PROJECTS */}
        <Projects />

        <div className="hr"></div>

        {/* EXPERIENCE */}
        <Experience />

        <div className="hr"></div>

        {/* SKILLS */}
        <Skills />

        <div className="hr"></div>

        {/* GITHUB ACTIVITY */}
        <GithubActivity />

        <div className="hr"></div>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="edu-certs band band-b" id="education">
          <div className="wrap">
            <Education />
            <Certifications />
          </div>
        </section>

        <div className="hr"></div>

        {/* CONTACT */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default App;
