import React from 'react';
import { Briefcase, GraduationCap, MapPin, Mail, Linkedin, FileText } from 'lucide-react';

// Custom X icon (looks like the standard styling or standard Twitter/X)
const XIcon: React.FC<{ className?: string; size?: number; strokeWidth?: number }> = ({
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

// Custom Github icon that matches the original custom path in index.html:
// <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="7" r="3.2"/><path d="M12 10.2V15M8 19v-2.4c0-.9.9-1.6 2-1.6h4c1.1 0 2 .7 2 1.6V19M6 19h12"/></svg>
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

export const Hero: React.FC = () => {
  return (
    <section className="hero band">
      <div className="wrap">
        <span className="hero-hi">hi there, I'm</span>
        <div className="hero-id-row">
          <div className="avatar">VK</div>
          <h1>Vishal Kashyap</h1>
        </div>
        
        <div className="meta-row">
          <span className="meta-pill">
            <Briefcase size={12} strokeWidth={1.6} />
            Full Stack Developer
          </span>
          <span className="meta-pill">
            <GraduationCap size={12} strokeWidth={1.6} />
            3rd-year CS Student
          </span>
          <span className="meta-pill">
            <MapPin size={12} strokeWidth={1.6} />
            Ghaziabad, India
          </span>
        </div>
        
        <div className="hero-status">
          <span className="pulse-dot"></span>Open to internships &amp; full-stack roles
        </div>
        
        <p className="hero-intro">
          I spend most of my time in React and Next.js, with the rest of the MERN stack filling in the gaps. Lately I've been building things that lean on real-time data and NLP rather than another CRUD app — a resume-scoring tool, a live polling platform, and a work-in-progress project I'm not quite ready to talk about yet.
        </p>
        
        <div className="btn-row">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#" className="btn btn-outline">
            Resume
          </a>
        </div>
        
        <div className="connect-row">
          <span className="connect-label">Connect with me</span>
          <div className="icon-row">
            <a className="social-pill" href="mailto:vk3293801@gmail.com">
              <Mail size={14} strokeWidth={1.6} />
              Email
            </a>
            <a className="social-pill" href="https://x.com/VishalxKodes" target="_blank" rel="noopener noreferrer">
              <XIcon size={14} strokeWidth={1.6} />
              X
            </a>
            <a className="social-pill" href="https://github.com/Vishal795-knightrider" target="_blank" rel="noopener noreferrer">
              <CustomGithubIcon size={14} strokeWidth={1.6} />
              GitHub
            </a>
            <a className="social-pill" href="https://www.linkedin.com/in/vishal-kashyap-aa8b43328/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={14} strokeWidth={1.6} />
              LinkedIn
            </a>
            <a className="social-pill" href="#">
              <FileText size={14} strokeWidth={1.6} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
