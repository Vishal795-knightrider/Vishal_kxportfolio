import React, { useState, useEffect } from 'react';

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
      <div className="section-container footer-container-clean">
        {/* Row 1: Centered Visitor Counter (Clean text, no box) */}
        <div className="footer-visitor-row">
          <button
            type="button"
            className="footer-visitor-clean-btn"
            onClick={handleBoxClick}
            title="Click to celebrate!"
            aria-label={`Visitor number ${visitorCount}`}
          >
            <span className="footer-visitor-clean-label">You're visitor</span>
            <span className="footer-visitor-clean-num">#{visitorCount}</span>
            {hasInteracted && <span className="visitor-toast">👋 Hello!</span>}
          </button>
        </div>

        {/* Row 2: Status & Credits with no wide gap between them */}
        <div className="footer-text-row">
          <div className="footer-status-group">
            <span className="footer-live-dot"></span>
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
