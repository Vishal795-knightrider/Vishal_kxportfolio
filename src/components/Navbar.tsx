import React, { useState, useEffect } from 'react';
import { Moon, Sun, X } from 'lucide-react';

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isLight,
  setIsLight,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <nav>
        <a href="#" className="logo">
          <span className="dot"></span>vishal.dev
        </a>
        
        <div className="nav-mid">
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
          </div>
          <div className="kbd-hint">⌘ K</div>
        </div>

        <div className="nav-right">
          <span className="clock" id="clock">
            {time}
          </span>
          <button
            className="theme-btn"
            id="themeBtn"
            aria-label="Toggle theme"
            onClick={() => setIsLight(!isLight)}
            style={{ cursor: 'pointer' }}
          >
            {isLight ? (
              <Sun size={13} strokeWidth={1.6} />
            ) : (
              <Moon size={13} strokeWidth={1.6} />
            )}
          </button>
          
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={19} strokeWidth={1.6} style={{ color: 'var(--text-primary)' }} />
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="w-[19px] h-[1.5px] bg-[var(--text-primary)] block"></span>
                <span className="w-[19px] h-[1.5px] bg-[var(--text-primary)] block"></span>
                <span className="w-[19px] h-[1.5px] bg-[var(--text-primary)] block"></span>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
