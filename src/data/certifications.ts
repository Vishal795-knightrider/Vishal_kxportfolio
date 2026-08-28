export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services · CLF-C02'
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    year: 'Apr 2026'
  }
];
