import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container">
        <h2 className="section-title-serif">About.</h2>

        <div className="about-text-content">
          <p>
            Hey, I am a <strong>Full Stack Engineer</strong> who enjoys <strong>building things from scratch</strong> and figuring out how everything works together.
          </p>

          <p>
            Started with <strong>HTML and CSS</strong>, then moved to building small <strong>React projects</strong> and gradually into <strong>full stack development</strong> with Node.js, Express, databases, and REST APIs. I have been working on projects where I can handle both the <strong>UI and the backend</strong> and understand how everything connects.
          </p>

          <p>
            Recently, I’ve also been getting into <strong>ML and AI</strong>, experimenting with how these technologies can be used in actual products rather than just building demos.
          </p>

          <p>
            I’ve also completed a <strong>3 month Full Stack Development internship</strong>, where I got to work with a team, understand how development works in a real environment, and get hands-on experience with tasks given by the manager.
          </p>

          <p className="about-closing-statement">
            <strong>Still learning... still building...</strong> and trying to get better with every technology I work with.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
