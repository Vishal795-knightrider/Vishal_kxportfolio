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

          <motion.div
            className="contact-links-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.a
              href="https://github.com/Vishal795-knightrider"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-animated"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } },
              }}
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-animated"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } },
              }}
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://x.com/VishalxKodes"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-animated"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } },
              }}
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              Twitter
            </motion.a>

            <motion.a
              href="mailto:vk3293801@gmail.com"
              className="contact-pill-btn contact-pill-primary contact-pill-animated contact-pill-mail"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } },
              }}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <Mail size={13} className="mr-1 mail-icon-animated" />
              Mail <span className="arrow arrow-animated">↗</span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1Xexample/view"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-animated"
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 20 } },
              }}
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
