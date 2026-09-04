import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(52);

  useEffect(() => {
    // Visitor counter simulation or persistent local storage counter
    const stored = localStorage.getItem('vk_visitor_num');
    if (stored) {
      setVisitorCount(parseInt(stored, 10));
    } else {
      const newCount = 52 + Math.floor(Math.random() * 12);
      localStorage.setItem('vk_visitor_num', newCount.toString());
      setVisitorCount(newCount);
    }
  }, []);

  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <div className="visitor-badge">
          You're visitor <span className="visitor-number">#{visitorCount}</span>
        </div>

        <div className="footer-credits">
          Designed &amp; built by <span className="footer-author">Vishal Kashyap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
