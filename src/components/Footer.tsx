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
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-container footer-container-stacked">
        {/* 1. First: You're visitor [#no] */}
        <div className="visitor-row">
          <span className="visitor-text">You're visitor</span>
          <motion.button
            type="button"
            className="visitor-boxed-badge"
            onClick={handleBoxClick}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            title="Click to celebrate!"
            aria-label={`Visitor number ${visitorCount}`}
          >
            <span className="visitor-boxed-inner">#{visitorCount}</span>
            {hasInteracted && <span className="visitor-toast">👋 Hello!</span>}
          </motion.button>
        </div>

        {/* 2. Below: Open to opportunities */}
        <div className="footer-status-row">
          <span className="footer-live-dot"></span>
          <span className="footer-live-text">Open to internships &amp; opportunities</span>
          <span className="footer-sep-dash">•</span>
          <span className="footer-year">© {new Date().getFullYear()}</span>
        </div>

        {/* 3. After small space: Designed & built */}
        <div className="footer-credits-stacked">
          <span>Designed &amp; built by </span>
          <a href="#hero" className="footer-author-link">
            Vishal Kashyap
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
