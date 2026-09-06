import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

type FilterType = 'ALL' | 'Full Stack' | 'Frontend' | 'AI / ML';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'Full Stack') return project.categories.includes('full stack');
    if (activeFilter === 'Frontend') return project.categories.includes('frontend');
    if (activeFilter === 'AI / ML') return project.categories.includes('ai/ml');
    return true;
  });

  const filters: FilterType[] = ['ALL', 'Full Stack', 'Frontend', 'AI / ML'];

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        {/* Header with Title and Filter Tabs */}
        <div className="projects-header-row">
          <h2 className="section-title-serif">Projects.</h2>

          <div className="projects-filter-tabs" role="tablist">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-tab-btn ${activeFilter === filter ? 'filter-tab-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="project-grid-item"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
