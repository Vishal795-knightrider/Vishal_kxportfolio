import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Film, GitBranch, Layers } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hasVideo = Boolean(project.video);
  const isLive = project.badges.status === 'live';

  // Video is only considered active and visible when hovered, ready, playing, and has no error
  const isVideoActive = Boolean(
    hasVideo &&
    isHovered &&
    isVideoReady &&
    isVideoPlaying &&
    !hasVideoError
  );

  // The static image must remain visible whenever the video is not active
  const isImageVisible = !isVideoActive;

  // Reset video state if the video source changes
  useEffect(() => {
    setIsVideoReady(false);
    setIsVideoPlaying(false);
    setHasVideoError(false);
  }, [project.video]);

  // Ensure HTML5 video DOM element has muted and defaultMuted (required by browsers for autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
    }
  }, [project.video]);

  // Handle mouse enter: trigger playback safely
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);

    const video = videoRef.current;
    if (!video || !hasVideo || hasVideoError) return;

    video.muted = true;

    // Reset currentTime to 0 on enter if ready
    try {
      if (video.readyState >= 1 && video.currentTime !== 0) {
        video.currentTime = 0;
      }
    } catch {
      // ignore
    }

    // Attempt video playback safely
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error: unknown) => {
        const err = error as { name?: string };
        // AbortError is normal when user unhovers quickly before play() resolves
        if (err?.name === 'AbortError') {
          return;
        }
        console.warn(`[ProjectCard] Video play failed for "${project.title}":`, error);
        setHasVideoError(true);
        setIsVideoPlaying(false);
      });
    }
  }, [hasVideo, hasVideoError, project.title]);

  // Handle mouse leave: pause, reset time, hide video
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsVideoPlaying(false);

    const video = videoRef.current;
    if (!video || !hasVideo) return;

    try {
      video.pause();
      if (video.readyState >= 1 && video.currentTime !== 0) {
        video.currentTime = 0;
      }
    } catch {
      // ignore
    }
  }, [hasVideo]);

  // Video event handlers
  const handleLoadedMetadata = () => {
    setIsVideoReady(true);
  };

  const handleCanPlay = () => {
    setIsVideoReady(true);
  };

  const handlePlaying = () => {
    setIsVideoPlaying(true);
    setIsVideoReady(true);
  };

  const handlePause = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.warn(`[ProjectCard] Video failed to load for "${project.title}":`, project.video, e);
    setHasVideoError(true);
    setIsVideoReady(false);
    setIsVideoPlaying(false);
  };

  const handleEnded = () => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div
      className="gallery-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 16:10 Visual Media Preview (Image or Video) */}
      <div className="gallery-media-container">
        {project.isConcept ? (
          /* FrameGit Concept Preview Canvas - Clearly labeled wireframe/concept */
          <div className="gallery-concept-canvas">
            {/* Ambient grid background pattern */}
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
                  Version control for video editors &amp; designers
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Image + Hover Video Preview */
          <>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className={`gallery-media-img ${!isImageVisible ? 'media-hidden' : ''}`}
                loading="lazy"
              />
            )}

            {hasVideo && (
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={handleLoadedMetadata}
                onCanPlay={handleCanPlay}
                onPlaying={handlePlaying}
                onPause={handlePause}
                onError={handleVideoError}
                onEnded={handleEnded}
                className={`gallery-media-video ${isVideoActive ? 'video-active' : ''}`}
              />
            )}
          </>
        )}
      </div>

      {/* Minimal Project Information Underneath (No outer card) */}
      <div className="gallery-item-info">
        <div className="gallery-item-header">
          <h3 className="gallery-item-title">{project.title}</h3>
          <span
            className={`gallery-status-badge ${
              isLive ? 'status-live' : 'status-progress'
            }`}
          >
            <span className="gallery-status-dot" />
            <span>{project.badges.statusText}</span>
          </span>
        </div>

        {/* Short 1–2 line description */}
        <p className="gallery-item-desc">{project.description}</p>

        {/* Compact Tech Stack Pills */}
        <div className="gallery-item-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="gallery-tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Action links row: Live ↗ and GitHub ↗ for live projects */}
        {(project.links.live || project.links.github) && (
          <div className="gallery-item-links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-action-link"
              >
                <span>Live</span>
                <span className="link-arrow">↗</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-action-link"
              >
                <span>GitHub</span>
                <span className="link-arrow">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;


