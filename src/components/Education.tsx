import React from 'react';
import { education } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <h2 className="section-title-serif">Education.</h2>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-item-row" key={index}>
              <div className="edu-left-col">
                <div className="edu-institution-name">{item.institution}</div>
                <div className="edu-degree-text">{item.degree}</div>
              </div>

              <div className="edu-right-col">
                <div className="edu-year-text">{item.year}</div>
                <div className="edu-detail-text">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
