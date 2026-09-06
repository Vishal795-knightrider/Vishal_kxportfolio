import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, GitBranch, Film, Layers } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hasVideo = Boolean(project.video);
  const isLive = project.badges.status === 'live';

  // Handle video hover playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;

    if (isHovered) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Gracefully ignore browser auto-play policy rejections
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, hasVideo]);

  return (
    <article
      className="gallery-project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 16:10 Visual Media Preview */}
      <div className="gallery-media-container">
        {project.isConcept ? (
          /* FrameGit Concept Preview Canvas - Clearly labeled wireframe/concept */
          <div className="gallery-concept-canvas">
            {/* Ambient visual background pattern */}
            <div className="concept-canvas-grid" />

            {/* Concept Illustration: Video timeline track + Git branching */}
            <div className="concept-wireframe-body">
              <div className="concept-track-header">
                <div className="concept-track-tag">
                  <Film size={12} />
                  <span>Timeline 01:24</span>
                </div>
                <div className="concept-track-tag">
                  <GitBranch size={12} />
                  <span>branch: v2-color-grade</span>
                </div>
              </div>

              {/* Visual timeline tracks & commit nodes */}
              <div className="concept-timeline-visual">
                <div className="concept-timeline-track">
                  <div className="concept-clip clip-video" />
                  <div className="concept-clip clip-audio" />
                </div>
                <div className="concept-branch-line">
                  <span className="concept-node node-a" />
                  <span className="concept-node node-b" />
                  <span className="concept-node node-c" />
                </div>
              </div>

              {/* Centered Concept Notice Badge */}
              <div className="concept-badge-wrap">
                <span className="concept-badge-pill">
                  <Layers size={11} />
                  CONCEPT PREVIEW
                </span>
                <span className="concept-caption">
                  Version control for video editors & designers
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Image + Video Preview */
          <>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className={`gallery-media-img ${hasVideo && isHovered ? 'media-hidden' : ''}`}
                loading="lazy"
              />
            )}

            {hasVideo && (
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`gallery-media-video ${isHovered ? 'video-active' : ''}`}
              />
            )}
          </>
        )}
      </div>

      {/* Project Meta Footer: Title & Status */}
      <div className="gallery-card-footer">
        <div className="gallery-title-row">
          <h3 className="gallery-project-title">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-title-link"
              >
                <span>{project.title}</span>
                <ExternalLink className="gallery-link-icon" size={13} />
              </a>
            ) : (
              <span>{project.title}</span>
            )}
          </h3>
        </div>

        <div className="gallery-status-row">
          <span
            className={`gallery-status-pill ${
              isLive ? 'status-live' : 'status-progress'
            }`}
          >
            <span className="gallery-status-dot" />
            <span>{project.badges.statusText}</span>
          </span>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-icon-btn"
              aria-label={`${project.title} source code on GitHub`}
              title="View on GitHub"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

