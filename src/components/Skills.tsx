import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Database, Network } from 'lucide-react';

// Custom icons for tools where skillicons might be unavailable or need custom rendering
const renderToolIcon = (skill: typeof skills[0]) => {
  if (skill.customIcon === 'api') {
    return (
      <span className="tool-icon-custom api-icon">
        <Network size={14} />
      </span>
    );
  }
  if (skill.customIcon === 'database') {
    return (
      <span className="tool-icon-custom db-icon">
        <Database size={14} />
      </span>
    );
  }
  if (skill.icon) {
    return (
      <img
        src={`https://skillicons.dev/icons?i=${skill.icon}`}
        alt={skill.name}
        className="tool-icon-img"
        loading="lazy"
        onError={(e) => {
          // Fallback if network issue
          (e.target as HTMLElement).style.display = 'none';
        }}
      />
    );
  }
  return null;
};

export const Skills: React.FC = () => {
  return (
    <motion.section
      className="skills-section"
      id="skills"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="skills-header-row">
          <h2 className="section-title-serif">Tech Stack.</h2>
          <span className="tools-counter-badge">{skills.length} TOOLS</span>
        </div>

        {/* 20 Tools Pill Grid */}
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-pill-card"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              whileHover={{ y: -1.5, scale: 1.02, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
              whileTap={{ scale: 0.98 }}
            >
              {renderToolIcon(skill)}
              <span className="skill-pill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
