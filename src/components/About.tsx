import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <h2 className="section-title-serif">About.</h2>

        <div className="about-text-content">
          <p>
            Hey, I'm Vishal — a full stack developer from Ghaziabad who loves building clean, modern products where design, functionality, and even the smallest details matter. Most of what I know came from shipping: small React pages first, then MERN apps, then systems that had to stay in sync across many users at once.
          </p>

          <p>
            Lately my work sits between two interests: full-stack product engineering and applied machine learning. On one side I'm wiring up APIs, databases and interfaces; on the other I'm working with text — similarity, scoring, and getting NLP models to say something genuinely useful.
          </p>

          <p>
            I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.
          </p>
        </div>

        {/* Developer Snapshot Card */}
        <div className="dev-snapshot-card">
          <div className="snapshot-label">DEVELOPER SNAPSHOT</div>
          <div className="snapshot-grid">
            <div className="snapshot-col">
              <div className="snapshot-item">
                <span className="snapshot-bullet">•</span>
                <span>Building products.</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-bullet">•</span>
                <span>Shipping consistently.</span>
              </div>
            </div>

            <div className="snapshot-col">
              <div className="snapshot-item">
                <span className="snapshot-bullet">•</span>
                <span>Learning technologies.</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-bullet">•</span>
                <span>Obsessed with clean code.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
