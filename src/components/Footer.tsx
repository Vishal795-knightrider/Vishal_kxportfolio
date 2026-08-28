import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const XIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({ size = 14, strokeWidth = 1.6 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} style={{ width: size, height: size }}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

const CustomGithubIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({ size = 14, strokeWidth = 1.6 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} style={{ width: size, height: size }}>
    <circle cx="12" cy="7" r="3.2" />
    <path d="M12 10.2V15M8 19v-2.4c0-.9.9-1.6 2-1.6h4c1.1 0 2 .7 2 1.6V19M6 19h12" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section" aria-label="Footer">
      <div className="wrap">
        <div className="footer-box">
          {/* Name + title */}
          <div className="footer-identity">
            <div className="footer-name">Vishal Kashyap</div>
            <div className="footer-role">Full Stack Developer</div>
          </div>

          {/* Social links */}
          <nav className="footer-links" aria-label="Social links">
            <a href="https://github.com/Vishal795-knightrider" target="_blank" rel="noopener noreferrer" className="footer-link">
              <CustomGithubIcon size={14} strokeWidth={1.6} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <Linkedin size={14} strokeWidth={1.6} />
              LinkedIn
            </a>
            <a href="https://x.com/VishalxKodes" target="_blank" rel="noopener noreferrer" className="footer-link">
              <XIcon size={14} strokeWidth={1.6} />
              X
            </a>
            <a href="mailto:vk3293801@gmail.com" className="footer-link">
              <Mail size={14} strokeWidth={1.6} />
              Email
            </a>
          </nav>

          {/* Location + year */}
          <div className="footer-meta">
            <span>Ghaziabad, India</span>
            <span className="footer-dot">•</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
