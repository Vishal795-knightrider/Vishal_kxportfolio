import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
          {experience.map((item, index) => {
            const hasBuiltProjects = Boolean(
              item.builtProjects && item.builtProjects.length > 0
            );

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
                  </div>

                  {/* 6. Built Projects Tree Section */}
                  {hasBuiltProjects && item.builtProjects && (
                    <div className="exp-built-section">
                      <div className="exp-built-heading-wrap">
                        <div className="exp-heading-connector-line" />
                        <h4 className="exp-built-heading">
                          {item.builtProjectsTitle || 'What I built at IISPPR'}
                        </h4>
                      </div>

                      <div className="exp-built-tree">
                        {item.builtProjects.map((project, pIdx) => {
                          const isLast =
                            pIdx === item.builtProjects!.length - 1;
                          return (
                            <div
                              key={pIdx}
                              className={`exp-tree-item ${
                                isLast ? 'is-last' : ''
                              }`}
                            >
                              {/* Connector stem and node dot */}
                              <div className="exp-tree-branch">
                                <div className="exp-branch-stem" />
                                <span className="exp-branch-dot" />
                              </div>

                              {/* Project Link Card */}
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="exp-project-link-card"
                              >
                                <div className="exp-project-title-row">
                                  <span className="exp-project-title">
                                    {project.title}
                                  </span>
                                  <ExternalLink
                                    className="exp-project-icon"
                                    size={14}
                                  />
                                </div>
                                <span className="exp-project-url">
                                  {project.url}
                                </span>
                              </a>
                            </div>
                          );
                        })}
                      </div>
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

