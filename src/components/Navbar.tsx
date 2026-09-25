import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isLight,
  setIsLight,
  isMenuOpen,
  setIsMenuOpen,
  onOpenSearch,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <header className="nav-outer">
      <div className={`nav-container ${scrolled ? 'nav-container--scrolled' : ''}`}>
        {/* Brand Logo with Cursive Font and Colored Dot */}
        <a href="#hero" className="brand-logo" aria-label="Vishal home">
          <span>vishal</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Center Links (Matching reference: About, Work, Lab, Contact) */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <a href="#about" className="nav-link-item">About</a>
          <a href="#projects" className="nav-link-item">Work</a>
          <a href="#experience" className="nav-link-item">Lab</a>
          <a href="#contact" className="nav-link-item">Contact</a>
        </nav>

        {/* Right Action: Search, Theme Toggle, and "Get in Touch" Pill */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-action-btn"
            onClick={onOpenSearch}
            title="Search (⌘K)"
            aria-label="Search sections & projects"
          >
            <Search size={14} />
          </button>

          <button
            type="button"
            className="nav-icon-action-btn"
            onClick={handleToggleTheme}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <a href="#contact" className="nav-get-in-touch-btn">
            Get in Touch
          </a>

          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
