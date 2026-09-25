import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Lightbulb, Rocket, Sparkles } from 'lucide-react';
import vishalAvatar from '../assets/images/vishal-profile.jpg';

// Minimal custom X (Twitter) icon
const XIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Minimal GitHub icon
const GithubIcon: React.FC<{ size?: number }> = ({ size = 17 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Minimal LinkedIn icon
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 17 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

// Cycling titles
const ROLES = [
  'Full-Stack Developer.',
  'Software Engineer.',
  'Product Builder.',
];

export const Hero: React.FC = () => {
  const [istTime, setIstTime] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setIstTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cycle role titles every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="section-container hero-container-styled">
        {/* Main Header Row with Hand-Drawn Arrow & Inline Avatar (vinitpatil.me style) */}
        <div className="hero-title-wrapper relative">
          {/* Hand-drawn SVG doodle arrow pointing to the name on desktop */}
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="hero-doodle-arrow"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 9c18-6 30 5 25 17-4 10-19 10-17 0 2-11 22-8 36 2 8 6 16 10 26 11" />
            <path d="M74 32c2 3 4 5 8 7-4 2-6 4-8 8" />
          </svg>

          {/* Heading: Hey, I'm [avatar] Vishal */}
          <h1 className="hero-heading-vinit">
            <span className="hero-heading-text">Hey, I'm</span>
            <span className="hero-avatar-inline-box group" title="Vishal Kashyap">
              <img
                src={vishalAvatar}
                alt="Vishal Kashyap"
                className="hero-avatar-inline-img"
              />
              <span className="hero-avatar-online-dot" title="Open to opportunities" />
            </span>
            <span className="hero-heading-name">Vishal</span>
          </h1>
        </div>

        {/* Dynamic Role Subtitle */}
        <div className="hero-role-row">
          <span className="hero-role-prefix">I'm a </span>
          <div className="hero-role-rotator">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="hero-role-text"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Narrative Bio with Modern Typographic Rhythm & Inline Badges */}
        <div className="hero-bio-flow">
          <p className="hero-bio-lead">
            I build full-stack products from{' '}
            <span className="hero-highlight-pill group">
              <span className="highlight-text">idea</span>
              <Lightbulb size={13} className="highlight-icon text-amber-400" />
            </span>{' '}
            to{' '}
            <span className="hero-highlight-pill group">
              <span className="highlight-text">deployment</span>
              <Rocket size={13} className="highlight-icon text-amber-500" />
            </span>{' '}
            and maintenance. I care about{' '}
            <span className="hero-highlight-pill group">
              <span className="highlight-text">clean UI</span>
              <Sparkles size={13} className="highlight-icon text-amber-400" />
            </span>
            , solid APIs, and making things actually work.
          </p>

          <p className="hero-bio-tech">
            I mostly work with <strong className="tech-strong">React</strong>,{' '}
            <strong className="tech-strong">Next.js</strong>,{' '}
            <strong className="tech-strong">Node.js</strong>,{' '}
            <strong className="tech-strong">MongoDB</strong>, and a bit of{' '}
            <strong className="tech-strong">AI/ML</strong>.
          </p>
        </div>

        {/* Location & Live Clock Bar */}
        <div className="hero-meta-location-block">
          <div className="hero-location-bar">
            <div className="hero-location-item">
              <MapPin size={14} className="hero-meta-icon" />
              <span>Based in Ghaziabad, India · IST (UTC+5:30)</span>
            </div>
            {istTime && (
              <div className="hero-ist-clock-pill">
                <span className="clock-ping-dot" />
                <span className="font-mono text-xs">{istTime} IST</span>
              </div>
            )}
          </div>
        </div>

        {/* Clean Social Icons Row with Smooth Floating Tooltips */}
        <div className="hero-social-row">
          <a
            href="https://x.com/VishalxKodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn group"
            aria-label="X Twitter"
          >
            <XIcon size={15} />
            <span className="social-tooltip-pill">X</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn group"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
            <span className="social-tooltip-pill">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Vishal795-knightrider"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn group"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
            <span className="social-tooltip-pill">GitHub</span>
          </a>

          <a
            href="mailto:vk3293801@gmail.com"
            className="hero-social-icon-btn group"
            aria-label="Email"
          >
            <Mail size={16} />
            <span className="social-tooltip-pill">Email</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn hero-resume-btn group"
            aria-label="Resume"
          >
            <span className="text-[13px] font-medium">CV</span>
            <span className="social-tooltip-pill">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
