export interface SkillItem {
  name: string;
  category: 'lang' | 'front' | 'back' | 'db' | 'tools';
  icon?: string; // skillicons.dev slug
}

export const skills: SkillItem[] = [
  { name: 'C', category: 'lang', icon: 'c' },
  { name: 'C++', category: 'lang', icon: 'cpp' },
  { name: 'Java', category: 'lang', icon: 'java' },
  { name: 'JavaScript', category: 'lang', icon: 'js' },
  { name: 'Python', category: 'lang', icon: 'py' },
  { name: 'React.js', category: 'front', icon: 'react' },
  { name: 'Next.js', category: 'front', icon: 'nextjs' },
  { name: 'HTML', category: 'front', icon: 'html' },
  { name: 'CSS', category: 'front', icon: 'css' },
  { name: 'Tailwind CSS', category: 'front', icon: 'tailwind' },
  { name: 'Node.js', category: 'back', icon: 'nodejs' },
  { name: 'Express.js', category: 'back', icon: 'express' },
  { name: 'REST APIs', category: 'back' },
  { name: 'MySQL', category: 'db', icon: 'mysql' },
  { name: 'MongoDB', category: 'db', icon: 'mongodb' },
  { name: 'MERN', category: 'tools' },
  { name: 'Git', category: 'tools', icon: 'git' },
  { name: 'GitHub', category: 'tools', icon: 'github' },
  { name: 'VS Code', category: 'tools', icon: 'vscode' }
];
