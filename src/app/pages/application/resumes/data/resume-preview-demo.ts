import { Resume } from '../../../../core/interfaces/resumes.interface';

export const RESUME_PREVIEW_DEMO: Partial<Resume> = {
  personalInfo: { fullName: 'Alex Morgan', jobTitle: 'Senior Product Designer' },
  contact: {
    email: 'alex@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexmorgan',
    website: 'alexmorgan.design',
  },
  summary:
    'Product designer focused on clean UX, cross-functional leadership, and measurable business outcomes across enterprise and consumer products.',
  experience: [
    {
      company: 'Studio North',
      role: 'Lead Designer',
      startDate: '2022-03',
      endDate: 'Present',
      description: [
        'Built mobile-first design systems used across 6 product teams',
        'Led 0 to 1 UX initiatives that improved activation by 21%',
      ],
    },
    {
      company: 'Metric Labs',
      role: 'Product Designer',
      startDate: '2019-06',
      endDate: '2022-02',
      description: [
        'Redesigned dashboard workflows for data-heavy enterprise customers',
        'Partnered with PM and engineering to ship experimentation-ready UI patterns',
      ],
    },
  ],
  education: [
    {
      school: 'State University',
      degree: 'BFA Design',
      startDate: '2018-09',
      endDate: '2022-05',
      description: [],
    },
  ],
  skills: ['Figma', 'Design Systems', 'Product Strategy', 'User Research', 'Prototyping', 'Accessibility'],
  sections: [
    { id: 'summary-demo', type: 'summary', title: 'Summary', enabled: true },
    { id: 'experience-demo', type: 'experience', title: 'Experience', enabled: true },
    { id: 'education-demo', type: 'education', title: 'Education', enabled: true },
    { id: 'skills-demo', type: 'skills', title: 'Skills', enabled: true },
    {
      id: 'projects-demo',
      type: 'projects',
      title: 'Projects',
      enabled: true,
      entries: [
        {
          name: 'Design System Atlas',
          role: 'Design Lead',
          link: 'atlas.design',
          description: ['Unified web and mobile patterns', 'Cut UI delivery time by 34%'],
        },
      ],
    },
    {
      id: 'certifications-demo',
      type: 'certifications',
      title: 'Certifications',
      enabled: true,
      entries: [{ name: 'NN/g UX Certification', issuer: 'NN/g', issueDate: '2024-02' }],
    },
    {
      id: 'languages-demo',
      type: 'languages',
      title: 'Languages',
      enabled: true,
      entries: [
        { language: 'English', proficiency: 'Native' },
        { language: 'Spanish', proficiency: 'Professional' },
      ],
    },
    {
      id: 'awards-demo',
      type: 'awards',
      title: 'Awards',
      enabled: true,
      entries: [{ title: 'Design Excellence Award', issuer: 'Metric Labs', date: '2023' }],
    },
  ],
};
