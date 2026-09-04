import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="architectural-divider" aria-hidden="true">
      <div className="divider-ticks-row">
        {Array.from({ length: 19 }).map((_, idx) => (
          <span key={idx} className="divider-tick-line" />
        ))}
      </div>
      <div className="divider-center-motif">
        <span className="diamond-symbol">◇</span>
        <span className="diamond-symbol filled">◆</span>
        <span className="diamond-symbol">◇</span>
      </div>
    </div>
  );
};

export default SectionDivider;
