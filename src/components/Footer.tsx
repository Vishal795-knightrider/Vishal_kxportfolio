import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useVisitorCount } from '../hooks/useVisitorCount';

export const Footer: React.FC = () => {
  const { visitorCount } = useVisitorCount();
  const [hasInteracted, setHasInteracted] = useState(false);

  // Dynamic boxes: starts at 3 digits for current count (e.g. 107 -> 3 boxes),
  // and automatically grows to 4+ boxes when count increases (e.g. 1000 -> 4 boxes)
  const countStr = String(Math.max(1, visitorCount || 107));
  const digits = (countStr.length < 3 ? countStr.padStart(3, '0') : countStr).split('');

  const handleBoxClick = () => {
    setHasInteracted(true);
    setTimeout(() => setHasInteracted(false), 2400);
  };

  return (
    <footer className="site-footer">
      <div className="section-container footer-container-clean">
        {/* Row 1: Floating Visitor Counter (NO oval capsule, natural floating text + retro boxes) */}
        <div className="footer-visitor-row">
          <motion.div
            className="footer-visitor-stamp-wrap"
            onClick={handleBoxClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            role="button"
            tabIndex={0}
            title="Click to celebrate!"
            aria-label={`You are visitor number ${visitorCount}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleBoxClick();
              }
            }}
          >
            {/* Label: "you are visitor #" */}
            <span className="footer-visitor-label">
              you are visitor <span className="footer-hash-symbol">#</span>
            </span>

            {/* Retro Sage-Green Digit Box Strip (dynamic 3 or 4+ digits) */}
            <div className="retro-counter-strip">
              {digits.map((digit, idx) => (
                <div key={idx} className="retro-counter-cell">
                  <span className="retro-digit-char">{digit}</span>
                </div>
              ))}
            </div>

            {hasInteracted && (
              <span className="visitor-toast">🎉 Thanks for visiting!</span>
            )}
          </motion.div>
        </div>

        {/* Row 2: Elevated Status Badge & Editorial Colophon (Centered, cohesive without gap) */}
        <div className="footer-meta-bar">
          <div className="footer-availability-chip">
            <span className="footer-live-beacon">
              <span className="footer-beacon-ping" />
              <span className="footer-beacon-dot" />
            </span>
            <span className="footer-availability-label">Open to internships &amp; opportunities</span>
          </div>

          <div className="footer-colophon">
            <span className="footer-colophon-credits">
              Designed &amp; built by{' '}
              <a href="#hero" className="footer-author-brand">
                Vishal Kashyap
              </a>
            </span>
            <span className="footer-colophon-bullet">·</span>
            <span className="footer-colophon-year">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
