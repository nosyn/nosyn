import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA: Resume = {
  name: 'Son Nguyen',
  initials: 'SN',
  url: 'https://nosyn.dev',
  location: 'Bangkok, Thailand',
  locationLink: 'https://www.google.com/maps/place/bangkok',
  description:
    'Software Engineer with a passion for building automation tools.',
  summary:
    "I was born and raised in Vietnam. I've lived in America for 7 years and now I am living in Thailand. I love learning new technologies and building automation tools. ",
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'NestJS',
    'Typescript',
    'Node.js',
    'Python',
    'Go',
    'Postgres',
    'Docker',
    'Kubernetes',
    'CICD',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'nyenson1997@gmail.com',
    tel: '+84 797050797',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/iTLsPsL',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/nosyn-linkedin',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/xQj0H4j',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Code Engine Studio',
      href: 'https://www.codeenginestudio.com/',
      badges: [],
      location: 'Da Nang, Vietnam',
      title: 'Software Engineer ',
      logoUrl: '/ces.png',
      start: 'Sep 2023',
      end: 'Sep 2024',
      description:
        'Working as a full-stack developer on a variety of projects. Building web applications using React, Next.js, and NestJS. Developing automation tools for visual testing, AI chatbot, and CI/CD pipelines.',
    },
    {
      company: 'Plus One Robotics',
      badges: [],
      href: 'https://plusonerobotics.com',
      location: 'San Antonio, TX, USA',
      title: 'Software Engineer',
      logoUrl: '/por.png',
      start: 'Dec 2020',
      end: 'June 2023',
      description:
        'Started as a web developer intern and transitioned to a full-time software engineer. Developed a human-in-the-loop cloud based web application for controlling industrial robots. Implemented a real-time video streaming service using WebRTC and WebSockets. Integrated the application with a variety of industrial robots and sensors.',
    },
  ],
  education: [
    {
      school: 'Chulalongkorn University - Bangkok, Thailand',
      href: 'https://www.chula.ac.th/en/',
      degree: 'Master of Science in Computer Science',
      logoUrl: '/chula.png',
      start: '2024',
      end: 'Current',
    },
    {
      school: 'Texas A&M University - Corpus Christi, Texas, USA',
      href: 'https://www.tamucc.edu/',
      degree: 'Bachelor of Science in Computer Science',
      logoUrl: '/tamucc.png',
      start: '2016',
      end: '2020',
    },
  ],
  projects: [],
} as const;
