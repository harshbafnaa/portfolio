import { Experience, Project, Achievement } from './types';
import { Mail, Compass, Image, FileText, MessageCircle, Folder } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Harsh Bafna",
  tagline: "Crafting stories that stop the scroll.",
  contact: {
    phone: "+918296733414",
    email: "bafnaharsh3@gmail.com",
    linkedin: "https://linkedin.com/in/bafnaharsh",
    github: "https://github.com/harshbafnaa",
    instagram: "https://instagram.com/harshbafnaa",
    twitter: "https://twitter.com/realharshbafna",
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Viral Content Strategy Breakdown",
    videoId: 'R4uq9LS050k',
    type: 'Long-form',
    views: '200k+',
    engagement: '9.8%',
    link: 'https://youtu.be/R4uq9LS050k?si=sAGXTIskHOYDZ0g4'
  },
  {
    id: '2',
    title: "The Finance Revolution",
    videoId: 'LfUZp6ASA3Q',
    type: 'Long-form',
    views: '150k+',
    engagement: '8.5%',
    link: 'https://youtu.be/LfUZp6ASA3Q?si=1LhdakzBPqDBOHhR'
  },
  {
    id: '3',
    title: "Market Analysis Shorts",
    videoId: 'n3Qkie6_IJQ',
    type: 'Shorts',
    views: '850k+',
    engagement: '12%',
    link: 'https://youtube.com/shorts/n3Qkie6_IJQ?si=swP5rB8zSlC08Tcq'
  },
  {
    id: '4',
    title: "Crypto Trends 2024",
    videoId: 'T7NCLTH6Igs',
    type: 'Shorts',
    views: '500k+',
    engagement: '10.5%',
    link: 'https://youtube.com/shorts/T7NCLTH6Igs?si=RKDmKdqFF-8OUEnW'
  },
  {
    id: '5',
    title: "Investment Basics",
    videoId: 'ePDuD0A4xJ0',
    type: 'Shorts',
    views: '320k+',
    engagement: '9.1%',
    link: 'https://youtube.com/shorts/ePDuD0A4xJ0?si=sq50DdmCwuA70nPK'
  },
  {
    id: '6',
    title: "Tech Stock Rally",
    videoId: 'SDHBkROnZB4',
    type: 'Shorts',
    views: '120k+',
    engagement: '7.8%',
    link: 'https://youtube.com/shorts/SDHBkROnZB4?si=gE1dXUnE4Z1b1NCm'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: 'Angel One',
    role: 'Content Strategist',
    duration: '2022 - Present',
    description: 'Leading content initiatives for one of India’s largest retail stockbrokers. Spearheading video campaigns that simplify complex financial concepts for Gen Z.',
    logo: 'https://logo.clearbit.com/angelone.in',
    stats: [
      { label: 'Views Generated', value: '2M+' },
      { label: 'Follower Growth', value: '35%' },
    ],
    badges: ['Trending', 'Finance']
  },
  {
    id: 'exp2',
    company: 'Amazon',
    role: 'Content Specialist',
    duration: '2020 - 2022',
    description: 'Managed catalog quality and content accuracy. Developed automated workflows for content moderation.',
    logo: 'https://logo.clearbit.com/amazon.com',
    stats: [
      { label: 'Accuracy', value: '97.5%' },
      { label: 'Process Imprv', value: '40%' },
    ],
    badges: ['Operations', 'Quality']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Top Content Creator Award',
    category: 'Awards',
    description: 'Recognized for highest engagement rate in Q3 2023.',
    date: 'Oct 2023'
  },
  {
    id: 'a2',
    title: 'Team Lead - Creative Strategy',
    category: 'Leadership',
    description: 'Managed a team of 5 editors and 2 scriptwriters.',
    date: 'Jan 2023'
  },
  {
    id: 'a3',
    title: 'Digital Marketing Masterclass',
    category: 'Certifications',
    description: 'Advanced certification in SEO and viral loops.',
    date: 'May 2022'
  },
  {
    id: 'a4',
    title: '1 Million Views Milestone',
    category: 'Viral',
    description: 'Cumulative views across all managed social channels.',
    date: 'Dec 2023'
  }
];

// Mapping Sections to Mac Apps
export const NAV_ITEMS = [
  { id: 'landing', icon: Folder, label: 'Finder', section: 'LANDING', color: 'bg-blue-500' },
  { id: 'inbox', icon: Mail, label: 'Mail', section: 'INBOX', color: 'bg-blue-600' },
  { id: 'feed', icon: Compass, label: 'Safari', section: 'FEED', color: 'bg-white' }, // Custom handling for Safari icon
  { id: 'studio', icon: Image, label: 'Photos', section: 'STUDIO', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { id: 'board', icon: FileText, label: 'Notes', section: 'BOARD', color: 'bg-yellow-400' },
  { id: 'chat', icon: MessageCircle, label: 'Messages', section: 'CHAT', color: 'bg-green-500' },
];