import React, { useState } from 'react';
import { experience } from '../data/experience';
import { Building2, ExternalLink, Check, Copy } from 'lucide-react';

export const Experience: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyName = () => {
    navigator.clipboard.writeText('IISPPR');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="experience-header-row">
          <h2 className="section-title-serif">Work Experience.</h2>

          <div className="experience-top-links">
            <a
              href="https://iisppr.in"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-header-link"
            >
              VERIFY ON IISPRR.IN <span className="arrow">↗</span>
            </a>
            <button
              type="button"
              className="exp-copy-btn"
              onClick={handleCopyName}
              title="Copy company name"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? 'Copied!' : 'Copy name'}</span>
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="experience-list">
          {experience.map((item, index) => (
            <div className="experience-card" key={index}>
              {/* Top Row: Company & Duration Badge */}
              <div className="exp-card-top">
                <div className="exp-company-group">
                  <div className="company-icon-box">
                    <Building2 size={16} />
                  </div>
                  <span className="exp-company-name">{item.company}</span>
                </div>

                <div className="exp-badge">
                  {item.durationBadge}
                </div>
              </div>

              {/* Role */}
              <h3 className="exp-role-title">{item.role}</h3>

              {/* Bullet Points */}
              <ul className="exp-bullets-list">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">
                    <span className="exp-bullet-dot">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="exp-tags-row">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
