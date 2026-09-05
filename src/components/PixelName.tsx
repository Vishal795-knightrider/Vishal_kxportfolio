import React from 'react';
import { motion } from 'framer-motion';

// 5x7 Dot-matrix pixel font definitions (1 = filled square, 0 = empty)
const PIXEL_GLYPHS: Record<string, number[][]> = {
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  H: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  A: [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  K: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  P: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
};

interface PixelLetterProps {
  char: string;
}

const PixelLetter: React.FC<PixelLetterProps> = ({ char }) => {
  const matrix = PIXEL_GLYPHS[char.toUpperCase()];
  if (!matrix) return null;

  return (
    <div className="pixel-letter" aria-hidden="true">
      {matrix.map((row, rIdx) => (
        <div key={rIdx} className="pixel-row">
          {row.map((cell, cIdx) => (
            <span
              key={cIdx}
              className={`pixel-box ${cell === 1 ? 'pixel-box-on' : 'pixel-box-off'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

interface PixelNameProps {
  firstName?: string;
  lastName?: string;
  className?: string;
}

export const PixelName: React.FC<PixelNameProps> = ({
  firstName = 'VISHAL',
  lastName = 'KASHYAP',
  className = '',
}) => {
  return (
    <motion.div
      className={`pixel-name-container ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${firstName} ${lastName}`}
      role="heading"
      aria-level={1}
    >
      <span className="sr-only">{`${firstName} ${lastName}`}</span>

      {/* First Word: VISHAL */}
      <div className="pixel-word">
        {firstName.split('').map((char, index) => (
          <PixelLetter key={`first-${char}-${index}`} char={char} />
        ))}
      </div>

      {/* Second Word: KASHYAP */}
      {lastName && (
        <div className="pixel-word">
          {lastName.split('').map((char, index) => (
            <PixelLetter key={`last-${char}-${index}`} char={char} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default PixelName;
