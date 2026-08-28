import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skills } from '../data/skills';

type SkillCategory = 'all' | 'lang' | 'front' | 'back' | 'db' | 'tools';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  const filterTabs: { label: string; value: SkillCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Languages', value: 'lang' },
    { label: 'Frontend', value: 'front' },
    { label: 'Backend', value: 'back' },
    { label: 'Databases', value: 'db' },
    { label: 'Tools', value: 'tools' },
  ];

  return (
    <section className="skills band" id="skills">
      <div className="wrap">
        <div className="eyebrow">
          <span className="num">04</span> / Tech Stack
        </div>
        <div className="sec-head">
          <h2 className="sec-title">Tech Stack</h2>
          <div className="segmented" id="skillFilters">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                className={activeFilter === tab.value ? 'active' : ''}
                onClick={() => setActiveFilter(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div layout className="skill-panel" id="skillPanel">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isHasIcon = !!skill.icon;
              return (
                <motion.span
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className={`pill ${isHasIcon ? 'has-icon' : ''}`}
                  data-cat={skill.category}
                >
                  {isHasIcon && (
                    <img
                      className="skill-icon"
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={`${skill.name} icon`}
                      loading="lazy"
                    />
                  )}
                  {skill.name}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
