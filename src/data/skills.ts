export interface SkillItem {
  name: string;
  category: 'lang' | 'front' | 'back' | 'db' | 'tools';
  icon?: string; // skillicons.dev slug or custom
  customIcon?: string;
}

export const skills: SkillItem[] = [
  { name: 'JavaScript', category: 'lang', icon: 'js' },
  { name: 'Python', category: 'lang', icon: 'py' },
  { name: 'C', category: 'lang', icon: 'c' },
  { name: 'C++', category: 'lang', icon: 'cpp' },
  { name: 'React.js', category: 'front', icon: 'react' },
  { name: 'Next.js', category: 'front', icon: 'nextjs' },
  { name: 'HTML', category: 'front', icon: 'html' },
  { name: 'CSS', category: 'front', icon: 'css' },
  { name: 'Tailwind CSS', category: 'front', icon: 'tailwind' },
  { name: 'Node.js', category: 'back', icon: 'nodejs' },
  { name: 'Express.js', category: 'back', icon: 'express' },
  { name: 'REST APIs', category: 'back', customIcon: 'api' },
  { name: 'MongoDB', category: 'db', icon: 'mongodb' },
  { name: 'MySQL', category: 'db', icon: 'mysql' },
  { name: 'Git', category: 'tools', icon: 'git' },
  { name: 'GitHub', category: 'tools', icon: 'github' },
  { name: 'Postman', category: 'tools', icon: 'postman' },
  { name: 'Vercel', category: 'tools', icon: 'vercel' },
  { name: 'VS Code', category: 'tools', icon: 'vscode' },
  { name: 'Databases', category: 'db', customIcon: 'database' }
];
