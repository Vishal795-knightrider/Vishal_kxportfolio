export interface ExperienceItem {
  company: string;
  role: string;
  durationBadge: string;
  verifyUrl?: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'IISPPR',
    role: 'Full Stack Developer Intern',
    durationBadge: '3 Month Internship · Completed',
    verifyUrl: 'https://iisppr.in',
    bullets: [
      'Built web applications using the MERN stack',
      'Developed responsive UI components',
      'Integrated backend APIs',
      'Collaborated on project tasks',
      'Improved debugging and deployment workflows',
      'Gained hands-on experience in full-stack development'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  }
];
