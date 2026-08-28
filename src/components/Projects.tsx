import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

type FilterType = 'all' | 'full stack' | 'frontend' | 'ai/ml';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section className="projects band" id="projects">
      <div className="wrap">
        <div className="eyebrow">
          <span className="num">02</span> / Projects
        </div>
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Things I've built</h2>
            <p className="sec-sub">
              Two shipped, one in progress — no filler projects, no fake data.
            </p>
          </div>
          <div className="segmented" id="filters">
            {(['all', 'full stack', 'frontend', 'ai/ml'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="proj-grid" id="projGrid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
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
