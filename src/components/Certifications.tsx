import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Cloud, Network } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <motion.section
      className="certifications-section"
      id="certifications"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        <h2 className="section-title-serif">Certifications.</h2>

        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <motion.div
              className="certification-item-row"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
