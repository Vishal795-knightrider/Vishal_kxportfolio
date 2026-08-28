import React from 'react';
import { experience } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section className="experience band band-b" id="experience">
      <div className="wrap">
        <div className="eyebrow">
          <span className="num">03</span> / Experience
        </div>
        <h2 className="sec-title" style={{ marginBottom: '30px' }}>
          Work Experience.
        </h2>
        
        {experience.map((item, index) => (
          <div className="exp-block" key={index}>
            <div className="exp-rail"></div>
            <div className="exp-content">
              <div className="exp-company">{item.company}</div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-meta">
                {item.type}
                <span className="sep">·</span>
                {item.duration}
                <span className="sep">·</span>
                <span className="status-inline">{item.status}</span>
              </div>
              <ul className="exp-bullets">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
