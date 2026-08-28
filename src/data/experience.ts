export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  duration: string;
  status: 'Completed' | 'Present' | string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'IISPPR',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    duration: '3-Month Program',
    status: 'Completed',
    bullets: [
      'Built web applications using the MERN stack',
      'Developed responsive UI components',
      'Integrated backend APIs',
      'Collaborated on project tasks',
      'Improved debugging and deployment workflows',
      'Gained hands-on full-stack development experience'
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
  }
];
