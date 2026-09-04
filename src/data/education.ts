export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    institution: 'KIET Group of Institutions',
    degree: 'B.Tech in Computer Science',
    year: '2024 - 2028',
    detail: 'Ghaziabad, Uttar Pradesh'
  },
  {
    institution: 'Kendriya Vidyalaya, Moradabad',
    degree: 'Class 12 (PCM)',
    year: '2023',
    detail: '86%'
  },
  {
    institution: 'Kendriya Vidyalaya, Moradabad',
    degree: 'Class 10',
    year: '2021',
    detail: '89%'
  }
];
