import nlpPreview from '../assets/images/nlp-resume-scoring-preview.jpg';
import pollifyPreview from '../assets/images/pollify-preview.jpg';
import resonologyPreview from '../assets/images/resonology-preview.jpg';

export interface Project {
  id: string;
  title: string;
  year: string;
  categories: string[];
  description: string;
  tagline?: string;
  badges: {
    status: 'live' | 'progress';
    statusText: string;
    pillText?: string;
    pillStyle?: React.CSSProperties;
  };
  image?: string;
  isMockPreview?: boolean;
  notice?: string;
  details?: string[];
  tags: string[];
  links: {
    github?: string;
    live?: string;
    githubMuted?: boolean;
    githubMutedTitle?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'nlp-resume-scoring',
    title: 'NLP Resume Scoring System',
    year: '2024',
    categories: ['ai/ml'],
    description: 'An NLP-based resume scoring system that matches resumes with job descriptions using text similarity and generates similarity scores.',
    badges: {
      status: 'live',
      statusText: 'LIVE'
    },
    image: nlpPreview,
    details: [
      'Automated resume-to-job-description matching',
      'Generated similarity scores for candidate ranking',
      'Designed to reduce manual screening time'
    ],
    tags: ['Python', 'Machine Learning', 'NLP'],
    links: {
      github: 'https://github.com/Vishal795-knightrider/nlp-resume-scoring-system',
      live: 'https://nlp-resume-scoring-system.onrender.com/'
    }
  },
  {
    id: 'pollify',
    title: 'Pollify',
    year: 'Aug 2025 - Jan 2026',
    categories: ['full stack', 'frontend'],
    description: 'A real-time polling platform supporting instant vote updates and multiple concurrent users.',
    badges: {
      status: 'live',
      statusText: 'LIVE'
    },
    image: pollifyPreview,
    details: [
      'Real-time vote sync powered by Firebase',
      'Dynamic UI built with React',
      'Structured to hold up under multiple concurrent users'
    ],
    tags: ['React', 'Firebase', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/Vishal795-knightrider/Pollify',
      live: 'https://pollify-e197f.web.app/'
    }
  },
  {
    id: 'resonology-ai',
    title: 'Resonology AI',
    year: '2026',
    categories: ['ai/ml', 'full stack'],
    description: 'AI-Powered Revenue Operations & Conversation Intelligence Platform. Currently in progress — the preview below is a concept mockup, not a shipped interface.',
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    image: resonologyPreview,
    isMockPreview: false,
    notice: 'Links will be published when the project ships.',
    tags: ['AI', 'Revenue Operations', 'Conversation Intelligence'],
    links: {
      githubMuted: true,
      githubMutedTitle: 'Not public yet'
    }
  },
  {
    id: 'framegit',
    title: 'FrameGit',
    year: '2026',
    categories: ['full stack', 'frontend'],
    description: 'A version-control platform for video editors and designers, bringing branching, visual file comparison, and timestamped feedback to creative workflows.',
    badges: {
      status: 'progress',
      statusText: 'IN PROGRESS',
      pillText: 'CONCEPT PREVIEW'
    },
    notice: 'Links will be published when the project ships.',
    tags: ['React', 'Node.js', 'Express', 'Git'],
    links: {
      githubMuted: true,
      githubMutedTitle: 'Not public yet'
    }
  }
];
