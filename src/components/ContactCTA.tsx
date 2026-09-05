import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <motion.section
      className="contact-cta-section"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        {/* Centered Large Card */}
        <motion.div
          className="contact-card"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="contact-eyebrow">LET'S BUILD SOMETHING</span>
          <h2 className="contact-title-serif">Have an idea? Let's talk.</h2>
          <p className="contact-description">
            Open to internships, collaborations and interesting projects worth building. My inbox is the fastest way to reach me.
          </p>

          <div className="contact-links-row">
            <motion.a
              href="https://github.com/Vishal795-knightrider"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://x.com/VishalxKodes"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Twitter
            </motion.a>

            <motion.a
              href="mailto:vk3293801@gmail.com"
              className="contact-pill-btn contact-pill-primary"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Mail size={13} className="mr-1" />
              Mail <span className="arrow">↗</span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1Xexample/view"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
