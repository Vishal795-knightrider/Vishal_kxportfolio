import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { experience } from '../data/experience';

export const Experience: React.FC = () => {
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpandedMap((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
          {experience.map((item, index) => {
            const hasBuiltProjects = Boolean(
              item.builtProjects && item.builtProjects.length > 0
            );
            const isExpanded = Boolean(expandedMap[index]);

            return (
              <motion.div
                className="exp-timeline-item"
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                {/* Left Timeline Rail (Logo marker) */}
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
                  {!hasBuiltProjects && <div className="exp-timeline-line" />}
                </div>

                {/* Right Content Column */}
                <div className="exp-timeline-content">
                  {/* Main Company & Role Content Block */}
                  <div className="exp-main-body">
                    {/* Continuous vertical line connecting down from marker */}
                    {hasBuiltProjects && (
                      <div className="exp-body-connector-line" />
                    )}

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
                          <span className="exp-bullet-text">{bullet}</span>
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
                  </div>

                  {/* 6. Built Projects Section (Collapsible Accordion) */}
                  {hasBuiltProjects && item.builtProjects && (
                    <div className="exp-built-section">
                      <div className={`exp-built-heading-wrap ${isExpanded ? 'is-expanded' : ''}`}>
                        {/* Curved branch line joining timeline from logo into 'What I built' */}
                        <div className="exp-heading-branch" />
                        <button
                          type="button"
                          className="exp-built-toggle-btn"
                          onClick={() => toggleExpanded(index)}
                          aria-expanded={isExpanded}
                        >
                          <motion.span
                            className="exp-accordion-arrow-wrap"
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <ChevronRight size={14} className="exp-accordion-chevron" strokeWidth={2.2} />
                          </motion.span>
                          <h4 className="exp-built-heading">
                            {item.builtProjectsTitle || 'What I built at IISPPR'}
                          </h4>
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="built-projects-container"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="exp-built-projects-list">
                              {item.builtProjects.map((project, pIdx) => (
                                <div key={pIdx} className="exp-built-project-item">
                                  <span className="exp-built-project-dot">•</span>
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="exp-project-link"
                                  >
                                    <span className="exp-project-title">
                                      {project.title}
                                    </span>
                                    <ExternalLink
                                      className="exp-project-icon"
                                      size={13}
                                    />
                                  </a>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

