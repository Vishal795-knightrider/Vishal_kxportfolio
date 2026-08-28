import nlpPreview from '../assets/images/nlp-resume-scoring-preview.jpg';
import pollifyPreview from '../assets/images/pollify-preview.jpg';

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
    pillText: string;
    pillStyle?: React.CSSProperties;
  };
  image?: string;
  isMockPreview?: boolean;
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
    year: '2026',
    categories: ['ai/ml'],
    description: 'Matches resumes against job descriptions using text-similarity algorithms and outputs a similarity score to speed up screening.',
    badges: {
      status: 'live',
      statusText: 'Live',
      pillText: 'Featured'
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
    year: '2025–26',
    categories: ['full stack', 'frontend'],
    description: 'A real-time polling platform on Firebase — votes update instantly across every connected client, no page refresh needed.',
    badges: {
      status: 'live',
      statusText: 'Live',
      pillText: 'Featured'
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
    tagline: 'AI-powered revenue operations & conversation intelligence platform',
    description: 'Early-stage build — no public repo or demo yet, so nothing to link to just yet.',
    badges: {
      status: 'progress',
      statusText: 'Ongoing',
      pillText: 'Concept Preview',
      pillStyle: { color: 'var(--accent-bright)', borderColor: 'var(--accent-line)' }
    },
    isMockPreview: true,
    tags: ['In Progress'],
    links: {
      githubMuted: true,
      githubMutedTitle: 'Not public yet'
    }
  }
];
