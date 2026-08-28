import React from 'react';
import { education } from '../data/education';

export const Education: React.FC = () => {
  return (
    <>
      <div className="eyebrow">
        <span className="num">06</span> / Education
      </div>
      <h2 className="sec-title" style={{ marginBottom: '30px' }}>
        Education.
      </h2>
      
      {education.map((item, index) => (
        <div className="ec-row" key={index}>
          <div>
            <div className="ec-name">{item.institution}</div>
            <div className="ec-sub">{item.degree}</div>
          </div>
          <div className="ec-year">{item.year}</div>
        </div>
      ))}
    </>
  );
};

export default Education;
