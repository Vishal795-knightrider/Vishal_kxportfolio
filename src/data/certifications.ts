export interface CertificationItem {
  title: string;
  issuer: string;
  type?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    type: 'aws'
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy · April 2024',
    type: 'cisco'
  }
];
