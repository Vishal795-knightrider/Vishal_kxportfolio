import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta-section" id="contact">
      <div className="section-container">
        {/* Centered Large Card */}
        <div className="contact-card">
          <span className="contact-eyebrow">LET'S BUILD SOMETHING</span>
          <h2 className="contact-title-serif">Have an idea? Let's talk.</h2>
          <p className="contact-description">
            Open to internships, collaborations and interesting projects worth building. My inbox is the fastest way to reach me.
          </p>

          <div className="contact-links-row">
            <a
              href="https://github.com/Vishal795-knightrider"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/VishalxKodes"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
            >
              Twitter
            </a>

            <a
              href="mailto:vk3293801@gmail.com"
              className="contact-pill-btn contact-pill-primary"
            >
              <Mail size={13} className="mr-1" />
              Mail <span className="arrow">↗</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1Xexample/view"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
