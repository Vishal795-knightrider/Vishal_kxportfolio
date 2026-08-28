import React from 'react';

export const Footer: React.FC = () => {
  return (
    <>
      <div className="hatch-band band-b"></div>

      <div className="foot-note band band-b">
        <p>Built from scratch — no template, no boilerplate homepage.</p>
      </div>

      <footer className="foot-main band band-b">
        <div className="wrap foot-grid">
          <div>
            <div className="foot-name">Vishal Kashyap</div>
            <div className="foot-sub">Full Stack Developer · Ghaziabad, India</div>
          </div>
          <div className="foot-links">
            <a href="https://github.com/Vishal795-knightrider" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/VishalxKodes" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="mailto:vk3293801@gmail.com">Email</a>
          </div>
          <div className="foot-copy">© 2026 Vishal Kashyap</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
