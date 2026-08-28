import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const XIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({
  size = 14,
  strokeWidth = 1.6,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    style={{ width: size, height: size }}
  >
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

const CustomGithubIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({
  size = 14,
  strokeWidth = 1.6,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    style={{ width: size, height: size }}
  >
    <circle cx="12" cy="7" r="3.2" />
    <path d="M12 10.2V15M8 19v-2.4c0-.9.9-1.6 2-1.6h4c1.1 0 2 .7 2 1.6V19M6 19h12" />
  </svg>
);

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact band" id="contact">
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          // get in touch
        </div>
        <h2>Let's work together.</h2>
        <p>
          I'm open to internships, full-stack roles, and collaborations on interesting projects — if there's something worth building, I'd like to hear about it.
        </p>
        <a href="mailto:vk3293801@gmail.com" className="btn btn-primary">
          Get in touch
        </a>
        <div className="icon-row" style={{ justifyContent: 'center' }}>
          <a className="social-pill" href="mailto:vk3293801@gmail.com">
            <Mail size={14} strokeWidth={1.6} />
            Email
          </a>
          <a
            className="social-pill"
            href="https://x.com/VishalxKodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon size={14} strokeWidth={1.6} />
            X
          </a>
          <a
            className="social-pill"
            href="https://github.com/Vishal795-knightrider"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomGithubIcon size={14} strokeWidth={1.6} />
            GitHub
          </a>
          <a
            className="social-pill"
            href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={14} strokeWidth={1.6} />
            LinkedIn
          </a>
        </div>
        <div className="cta-foot">
          Currently open to internships &amp; full-stack roles
          <br />
          Usually replies within a day or two
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
