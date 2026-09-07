
export interface Project {
  id: string;
  title: string;
  year?: string;
  categories?: string[];
  description: string;
  tags: string[];
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
    description: 'An NLP-based system that analyzes resumes and scores them against job requirements.',
    tags: ['React', 'Node.js', 'Express', 'Python', 'NLP'],
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
    description: 'A real-time polling platform for creating polls and collecting responses easily.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
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
    description: 'AI-powered revenue operations and conversation intelligence platform.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AI'],
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    image: '/images/resonology-ai.png',
    links: {}
  },
  {
    id: 'framegit',
    title: 'FrameGit',
    description: 'GitHub for video editors and designers, built around visual version control and feedback.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    isConcept: true,
    links: {}
  }
];

