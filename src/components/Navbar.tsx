import React, { useState, useEffect } from 'react';
import { Moon, Sun, Search, Menu, X } from 'lucide-react';

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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-outer ${scrolled ? 'nav-outer--scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          vishal<span className="brand-dot">.</span>
        </a>

        {/* Center Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <a href="#about" className="nav-link-item">about</a>
          <a href="#projects" className="nav-link-item">projects</a>
          <a href="#experience" className="nav-link-item">experience</a>
          <a href="#github-activity" className="nav-link-item">github</a>
          <a href="#education" className="nav-link-item">education</a>
          <a href="#contact" className="nav-link-item">contact</a>
        </nav>

        {/* Right Controls: Search + Theme Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-search-btn"
            onClick={onOpenSearch}
            title="Search sections & projects (Ctrl+K)"
          >
            <Search size={13} className="search-icon" />
            <span className="search-text">Search</span>
            <span className="search-kbd">Ctrl K</span>
          </button>

          <button
            type="button"
            className="theme-toggle-btn"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={() => setIsLight(!isLight)}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? (
              <Moon size={15} strokeWidth={1.8} />
            ) : (
              <Sun size={15} strokeWidth={1.8} />
            )}
          </button>

          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
