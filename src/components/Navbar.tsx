import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

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

  const handleToggleTheme = () => {
    setIsLight(!isLight);
  };

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

        {/* Right Controls: Compact Search + Pill Theme Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-search-btn"
            onClick={onOpenSearch}
            title="Search sections & projects (⌘K)"
            aria-label="Search sections & projects (⌘K)"
          >
            <Search size={13} className="search-icon" />
            <span className="search-cmd-k">⌘K</span>
          </button>

          <button
            type="button"
            className={`theme-pill-switch ${isLight ? 'theme-pill--light' : 'theme-pill--dark'}`}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={handleToggleTheme}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          >
            <span className="theme-switch-track" aria-hidden="true">
              <span className="theme-switch-thumb" />
            </span>
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
