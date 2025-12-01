export interface Project {
  id: string;
  title: string;
  videoId: string;
  type: 'Shorts' | 'Long-form';
  views: string;
  engagement: string;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  stats: { label: string; value: string }[];
  badges: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Awards' | 'Leadership' | 'Certifications' | 'Viral';
  description: string;
  date: string;
}

export enum SectionType {
  LANDING = 'LANDING',
  INBOX = 'INBOX',
  FEED = 'FEED',
  STUDIO = 'STUDIO',
  BOARD = 'BOARD',
  CHAT = 'CHAT',
}