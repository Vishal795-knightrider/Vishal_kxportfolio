import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about band band-b" id="about">
      <div className="wrap">
        <div className="eyebrow">
          <span className="num">01</span> / About
        </div>
        <p>
          I'm in my third year of a Computer Science degree, and most of my actual learning has happened in side projects rather than lecture halls. React and Next.js are where I'm most comfortable, with the rest of the MERN stack filling in the gaps — Node, Express, MongoDB — through shipping things end to end instead of following tutorials. The projects I keep coming back to have something harder underneath: matching resumes to job descriptions with NLP, or keeping a poll's vote count in sync in real time across a dozen tabs — backed by a DSA foundation I keep sharpening on the side.
        </p>
      </div>
    </section>
  );
};

export default About;
