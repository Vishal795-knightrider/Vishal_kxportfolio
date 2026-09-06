import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <motion.section
      className="experience-section"
      id="experience"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="experience-header-row">
          <h2 className="section-title-serif">Work Experience.</h2>
        </div>

        {/* Timeline Layout */}
        <div className="experience-timeline">
          {experience.map((item, index) => (
            <motion.div
              className="exp-timeline-item"
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              {/* Left Timeline Rail (Logo marker + vertical line) */}
              <div className="exp-timeline-rail">
                <div className="exp-timeline-marker">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="exp-timeline-logo"
                    />
                  ) : (
                    <span className="exp-timeline-dot" />
                  )}
                </div>
                <div className="exp-timeline-line" />
              </div>

              {/* Right Content Column */}
              <div className="exp-timeline-content">
                {/* 1. Company Name */}
                <h3 className="exp-company-name">{item.company}</h3>

                {/* 2 & 3. Role, Employment Type & Duration */}
                <div className="exp-meta-row">
                  <span className="exp-role">{item.role}</span>
                  <span className="exp-type-pill">{item.employmentType}</span>
                  <span className="exp-meta-separator">·</span>
                  <span className="exp-duration">{item.duration}</span>
                </div>

                {/* 4. Concise Bullet Points */}
                <ul className="exp-bullets-list">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="exp-bullet-item">
                      <span className="exp-bullet-dot">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* 5. Technology Tags */}
                <div className="exp-tags-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 6. Company / Site Link (if present) */}
                {item.verifyUrl && (
                  <div className="exp-links-row">
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-site-link"
                    >
                      SITE <span className="arrow">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
