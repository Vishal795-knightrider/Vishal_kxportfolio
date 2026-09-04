import React from 'react';
import { certifications } from '../data/certifications';
import { Cloud, Network } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-container">
        <h2 className="section-title-serif">Certifications.</h2>

        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div className="certification-item-row" key={index}>
              <div className="cert-icon-col">
                {cert.type === 'aws' ? (
                  <span className="cert-badge-icon cert-aws" title="AWS">
                    <Cloud size={17} />
                  </span>
                ) : (
                  <span className="cert-badge-icon cert-cisco" title="Networking">
                    <Network size={17} />
                  </span>
                )}
              </div>

              <div className="cert-info-col">
                <div className="cert-title-text">{cert.title}</div>
                <div className="cert-issuer-text">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
