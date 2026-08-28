import React from 'react';
import { Project } from '../data/projects';
import { Globe } from 'lucide-react';

const CustomGithubIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({
  size = 14,
  strokeWidth = 1.6,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    style={{ width: size, height: size }}
  >
    <circle cx="12" cy="7" r="3.2" />
    <path d="M12 10.2V15M8 19v-2.4c0-.9.9-1.6 2-1.6h4c1.1 0 2 .7 2 1.6V19M6 19h12" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    year,
    description,
    tagline,
    badges,
    image,
    isMockPreview,
    details,
    tags,
    links,
  } = project;

  return (
    <div className="proj-card" data-cat={project.categories.join(' ')}>
      <div className="proj-preview">
        <div className="proj-stage">
          <div className="proj-badges">
            <span className={`status ${badges.status}`}>
              <span className="dot"></span>
              {badges.statusText}
            </span>
            <span className="pill featured" style={badges.pillStyle}>
              {badges.pillText}
            </span>
          </div>

          {isMockPreview ? (
            <div className="mock-res">
              <div className="dash-sidebar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="dash-main">
                <div className="dash-stats">
                  <div className="dash-stat">
                    <span className="dash-stat-dot"></span>
                    <span className="dash-stat-line"></span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-dot"></span>
                    <span className="dash-stat-line"></span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-dot"></span>
                    <span className="dash-stat-line"></span>
                  </div>
                </div>
                <div className="dash-body">
                  <div className="dash-chat">
                    <div className="chat-bubble left"></div>
                    <div className="chat-bubble right"></div>
                    <div className="chat-bubble left short"></div>
                  </div>
                  <svg className="dash-chart" viewBox="0 0 120 40" preserveAspectRatio="none">
                    <path
                      d="M0,32 L15,26 L30,29 L45,18 L60,22 L75,10 L90,14 L105,6 L120,9"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="res-word">concept preview — not an implemented product</div>
            </div>
          ) : (
            <img className="proj-shot" src={image} alt={`${title} preview`} />
          )}
        </div>
      </div>

      <div className="proj-body">
        <div className="proj-title-row">
          <h3>{title}</h3>
          <span className="proj-year">{year}</span>
        </div>
        
        {tagline && <div className="proj-tagline">{tagline}</div>}
        
        <p className="proj-desc">{description}</p>
        
        {details && details.length > 0 && (
          <details className="proj-details">
            <summary>
              <span className="chev">▾</span> Show engineering details
            </summary>
            <ul>
              {details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </details>
        )}

        <div className="proj-tags-row">
          <div className="proj-tags">
            {tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
          <div className="proj-icons">
            {links.githubMuted ? (
              <span className="icon-link muted" title={links.githubMutedTitle}>
                <CustomGithubIcon size={14} strokeWidth={1.6} />
              </span>
            ) : (
              <>
                {links.github && (
                  <a
                    className="icon-link"
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    title="GitHub"
                  >
                    <CustomGithubIcon size={14} strokeWidth={1.6} />
                  </a>
                )}
                {links.live && (
                  <a
                    className="icon-link"
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    title="Live Demo"
                  >
                    <Globe size={14} strokeWidth={1.6} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
