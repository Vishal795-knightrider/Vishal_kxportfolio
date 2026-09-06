import resonologyPreview from '../assets/images/resonology-preview.jpg';

export interface Project {
  id: string;
  title: string;
  year?: string;
  categories?: string[];
  description?: string;
  badges: {
    status: 'live' | 'progress';
    statusText: string;
    pillText?: string;
  };
  image?: string;
  video?: string;
  isConcept?: boolean;
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'nlp-resume-scoring',
    title: 'NLP Resume Scoring System',
    badges: {
      status: 'live',
      statusText: 'LIVE'
    },
    image: '/images/resume.png',
    video: '/videos/resume-video.mp4',
    links: {
      github: 'https://github.com/Vishal795-knightrider/nlp-resume-scoring-system',
      live: 'https://nlp-resume-scoring-system.onrender.com/'
    }
  },
  {
    id: 'pollify',
    title: 'Pollify',
    badges: {
      status: 'live',
      statusText: 'LIVE'
    },
    image: '/images/pollify.png',
    video: '/videos/pollify-video.mp4',
    links: {
      github: 'https://github.com/Vishal795-knightrider/Pollify',
      live: 'https://pollify-e197f.web.app/'
    }
  },
  {
    id: 'resonology-ai',
    title: 'Resonology AI',
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    image: resonologyPreview,
    links: {}
  },
  {
    id: 'framegit',
    title: 'FrameGit',
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    isConcept: true,
    links: {}
  }
];

