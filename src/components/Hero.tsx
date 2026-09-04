import React, { useState, useEffect } from 'react';
import { Mail, Clock, ArrowUpRight } from 'lucide-react';
import vishalAvatar from '../assets/images/vishal-avatar.jpg';

// Minimal custom X icon
const XIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Minimal GitHub icon
const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Minimal LinkedIn icon
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

export const Hero: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate IST (UTC+5:30)
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setIstTime(`${istString} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="section-container">
        {/* Profile Header */}
        <div className="hero-profile-row">
          <div className="hero-avatar-wrapper">
            <img
              src={vishalAvatar}
              alt="Vishal Kashyap"
              className="hero-avatar-img"
            />
          </div>

          <div className="hero-profile-info">
            <h1 className="hero-name">Vishal Kashyap</h1>
            <p className="hero-role-sub">Full Stack Developer · CS student</p>
            <a href="mailto:vk3293801@gmail.com" className="hero-email-link">
              <Mail size={13} className="hero-email-icon" />
              <span>vk3293801@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bio Text */}
        <p className="hero-bio">
          I build fast, thoughtful digital products—from full-stack and real-time web apps to useful NLP/AI systems. I care about clear interfaces, dependable backends, and code that remains easy to read.
        </p>

        {/* Action Buttons & Social Icons */}
        <div className="hero-actions-row">
          <div className="hero-btns-group">
            <a
              href="https://drive.google.com/file/d/1Xexample/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Resume
            </a>
            <a href="#projects" className="btn-secondary-pill">
              View my work
            </a>
          </div>

          <div className="hero-socials-group">
            <a
              href="mailto:vk3293801@gmail.com"
              className="social-icon-btn"
              aria-label="Send email"
              title="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://x.com/VishalxKodes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="X Twitter"
              title="X"
            >
              <XIcon size={14} />
            </a>
            <a
              href="https://github.com/Vishal795-knightrider"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
          </div>
        </div>

        {/* Status & Location Dual Cards */}
        <div className="hero-dual-cards">
          <div className="hero-status-card">
            <span className="card-label">STATUS</span>
            <div className="card-content">
              <span className="pulse-green-dot"></span>
              <span className="status-text">Open to internships</span>
            </div>
          </div>

          <div className="hero-location-card">
            <span className="card-label">GHAZIABAD, INDIA</span>
            <div className="card-content">
              <span className="location-clock">
                {istTime || '12:28:48 IST'}
              </span>
              <Clock size={13} className="clock-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
