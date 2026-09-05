import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';

export const Education: React.FC = () => {
  return (
    <motion.section
      className="education-section"
      id="education"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        <h2 className="section-title-serif">Education.</h2>

        <div className="education-list">
          {education.map((item, index) => (
            <motion.div
              className="education-item-row"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="edu-left-col">
                <div className="edu-institution-name">{item.institution}</div>
                <div className="edu-degree-text">{item.degree}</div>
              </div>

              <div className="edu-right-col">
                {item.year && <div className="edu-year-text">{item.year}</div>}
                {item.detail && <div className="edu-detail-text">{item.detail}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
