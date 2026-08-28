import React from 'react';
import { certifications } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <>
      <div className="ec-label second">Certifications</div>
      
      {certifications.map((cert, index) => (
        <div className="ec-row" key={index}>
          <div>
            <div className="ec-name">{cert.title}</div>
            <div className="ec-sub">{cert.issuer}</div>
          </div>
          {cert.year && <div className="ec-year">{cert.year}</div>}
        </div>
      ))}
    </>
  );
};

export default Certifications;
