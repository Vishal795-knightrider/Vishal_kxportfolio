import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        {/* Header with Title */}
        <div className="projects-header-row">
          <h2 className="section-title-serif">Projects.</h2>
        </div>

        {/* Strict Balanced 2x2 Grid (Desktop) / 1 Column (Mobile) */}
        <div className="projects-gallery-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="projects-gallery-cell"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

