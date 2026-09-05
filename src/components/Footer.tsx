import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(52);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Persistent local storage visitor counter
    const stored = localStorage.getItem('vk_visitor_num');
    if (stored) {
      setVisitorCount(parseInt(stored, 10));
    } else {
      const newCount = 52 + Math.floor(Math.random() * 12);
      localStorage.setItem('vk_visitor_num', newCount.toString());
      setVisitorCount(newCount);
    }
  }, []);

  const handleBoxClick = () => {
    setHasInteracted(true);
    setTimeout(() => setHasInteracted(false), 2000);
  };

  return (
    <footer className="site-footer">
      <div className="section-container footer-container-boxes">
        {/* Row 1: Centered Visitor Badge Box matching sketch */}
        <div className="footer-visitor-center">
          <motion.button
            type="button"
            className="visitor-center-box"
            onClick={handleBoxClick}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            title="Click to celebrate!"
            aria-label={`Visitor number ${visitorCount}`}
          >
            <span className="visitor-center-label">You're visitor</span>
            <span className="visitor-boxed-number">#{visitorCount}</span>
            {hasInteracted && <span className="visitor-toast">👋 Hello!</span>}
          </motion.button>
        </div>

        {/* Row 2: Two Boxes matching sketch: Left status box, Right credits box */}
        <div className="footer-dual-boxes">
          <div className="footer-box footer-box-left">
            <span className="footer-live-dot"></span>
            <span className="footer-live-text">Open to internships &amp; opportunities</span>
            <span className="footer-sep-dash">•</span>
            <span className="footer-year">© {new Date().getFullYear()}</span>
          </div>

          <div className="footer-box footer-box-right">
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
