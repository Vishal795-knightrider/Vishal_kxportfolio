import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useVisitorCount } from '../hooks/useVisitorCount';

export const Footer: React.FC = () => {
  const { ordinalText } = useVisitorCount();
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleStickerClick = () => {
    setHasInteracted(true);
    setTimeout(() => setHasInteracted(false), 2400);
  };

  return (
    <footer className="site-footer">
      <div className="section-container footer-container-clean">
        {/* Row 1: Centered Handwritten Visitor Counter (vinitpatil.me style) */}
        <div className="footer-visitor-row">
          <motion.button
            type="button"
            className="footer-handwritten-badge"
            onClick={handleStickerClick}
            whileHover={{ rotate: 0, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            title="Click to celebrate!"
            aria-label={`Visitor number ${ordinalText}`}
          >
            <span className="footer-handwritten-text">you are #{ordinalText} visitor</span>
            {hasInteracted && <span className="visitor-toast">🎉 Thanks for visiting!</span>}
          </motion.button>
        </div>

        {/* Row 2: Status & Credits */}
        <div className="footer-text-row">
          <div className="footer-status-group">
            <span className="footer-live-dot" />
            <span className="footer-live-text">Open to internships &amp; opportunities</span>
            <span className="footer-sep-dash">•</span>
            <span className="footer-year">© {new Date().getFullYear()}</span>
          </div>

          <span className="footer-mid-sep">•</span>

          <div className="footer-credits-group">
            <span>Designed &amp; built by </span>
            <a href="#hero" className="footer-author-link">
              Vishal Kashyap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
