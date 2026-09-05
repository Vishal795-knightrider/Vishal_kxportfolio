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

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        setIsLight(!isLight);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 450,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setIsLight(!isLight);
    }
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
            <span className="theme-switch-text">{isLight ? 'light' : 'dark'}</span>
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
