import React from 'react';
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
    <section className="skills-section" id="skills">
      <div className="section-container">
        {/* Header */}
        <div className="skills-header-row">
          <h2 className="section-title-serif">Tech Stack.</h2>
          <span className="tools-counter-badge">{skills.length} TOOLS</span>
        </div>

        {/* 20 Tools Pill Grid */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-pill-card">
              {renderToolIcon(skill)}
              <span className="skill-pill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
