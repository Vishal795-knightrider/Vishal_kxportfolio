import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Building2 } from 'lucide-react';

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

        {/* Experience Cards */}
        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              className="experience-card"
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -2 }}
            >
              {/* Top Row: Company & Duration Badge */}
              <div className="exp-card-top">
                <div className="exp-company-group">
                  <div className="company-icon-box">
                    <Building2 size={16} />
                  </div>
                  <span className="exp-company-name">{item.company}</span>
                </div>

                <div className="exp-badge">
                  {item.durationBadge}
                </div>
              </div>

              {/* Role */}
              <h3 className="exp-role-title">{item.role}</h3>

              {/* Bullet Points */}
              <ul className="exp-bullets-list">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">
                    <span className="exp-bullet-dot">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="exp-tags-row">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
