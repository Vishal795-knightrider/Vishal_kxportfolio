import iispprLogo from '../assets/images/iisppr-logo.png';

export interface ExperienceItem {
  company: string;
  role: string;
  employmentType: string;
  duration: string;
  logo?: string;
  verifyUrl?: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'IISPPR',
    role: 'Full Stack Developer Intern',
    employmentType: 'PART-TIME',
    duration: 'June 2026 – August 2026',
    logo: iispprLogo,
    verifyUrl: 'https://iisppr.in',
    bullets: [
      'Built the Book section of the website using Framer Motion, focusing on smooth interactions and animations.',
      'Worked with the team on assigned development tasks and contributed to the website development.',
      'Worked across frontend and backend development as part of the internship.'
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Framer Motion'
    ]
  }
];
