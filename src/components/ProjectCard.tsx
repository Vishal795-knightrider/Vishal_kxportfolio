import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    year,
    description,
    badges,
    image,
    notice,
    tags,
    links,
  } = project;

  const isLive = badges.status === 'live';

  return (
    <article className="project-card">
      {/* Project Image Container */}
      <div className="project-image-wrap">
        {image && (
          <img
            src={image}
            alt={`${title} interface preview`}
            className="project-image"
            loading="lazy"
          />
        )}
        {badges.pillText && (
          <div className="project-floating-badge">
            {badges.pillText}
          </div>
        )}
      </div>

      {/* Project Body */}
      <div className="project-body">
        {/* Status and Year Header */}
        <div className="project-meta-row">
          <div className={`project-status-badge ${isLive ? 'status-live' : 'status-progress'}`}>
            <span className="status-dot"></span>
            <span>{badges.statusText}</span>
          </div>
          <span className="project-date">{year}</span>
        </div>

        {/* Title */}
        <h3 className="project-title">{title}</h3>

        {/* Description */}
        <p className="project-desc">{description}</p>

        {/* Tags */}
        <div className="project-tags-row">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Links or Notice */}
        <div className="project-footer">
          {notice ? (
            <span className="project-notice">{notice}</span>
          ) : (
            <div className="project-links-row">
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  Live preview <span className="arrow">↗</span>
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  github <span className="arrow">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
