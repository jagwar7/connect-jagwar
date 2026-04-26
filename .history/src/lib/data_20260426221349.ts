
import { Briefcase, Github, GraduationCap, Linkedin, Mail, Rss, User } from "lucide-react";
import FLASH_AUTH_IMG1 from '../assets/images/FLASH_AUTH_IMG1.png';
import FLASH_AUTH_IMG2 from '../assets/images/FLASH_AUTH_IMG1.png';
import FLASH_AUTH_IMG3 from '../assets/images/FLASH_AUTH_IMG1.png';


export const personalData = {
  name: 'Nasim Akhter',
  title: 'Software Engineer',
  bio: 'A passionate Software Engineer with a knack for creating elegant solutions in the least amount of time. I specialize in full-stack development with a focus on building scalable and user-friendly web applications.',
  contact: {
    email: 'akhterofficial2000@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nasim-akhter6297/',
    github: 'https://github.com/jagwar7',
    blog: 'https://your-blog.com'
  },
};

export const skills = [
  'Java', 'C#', 'Javascript', 'Typescript', 'Python', 'C++',
  'Node Js', 'MongoDB', 'RestAPI', 'Next Js', 'React Js', 'Tailwind css', 'Springboot', 'Unity', 'Photon Fusion', 'Photon PUN 2', '.Net',
  'AWS', 'EC2', 'IAM', 'SSM', 'S3', 'VPC', 'Docker', 'Redis', 'RabbitMQ'
];

export const categorizedSkills = [
  {
    category: 'Languages',
    skills: ['Java', 'C#', 'Javascript', 'Typescript', 'Python', 'C++'],
  },
  {
    category: 'Tools',
    skills: ['Node Js', 'MongoDB', 'RestAPI', 'Next Js', 'React Js', 'Tailwind css', 'Springboot', 'Unity', 'Photon Fusion', 'Photon PUN 2', '.Net', 'Linux'],
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'EC2', 'IAM', 'SSM', 'S3', 'VPC', 'Docker', 'Redis', 'RabbitMQ', 'AWS CLI'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications',
    university: 'ABS Academy of Science, Technology and Management (MAKAUT University)',
    year: 'AUG 2020 - JUL 2023',
  },
];

export const experience = [
    {
        role: 'Game Developer',
        company: 'Red Apple Technologies',
        period: 'SEPT 2023 - FEB 2025',
        description: 'Architected and maintained multiplayer backend systems for a live mobile game — including matchmaking, inventory, and leaderboard services — handling real-time player data at production scale using Node.js and PlayFab. Reduced API latency by 55% (380ms → 170ms) through Redis caching layer implementation; improved data load times by 40%. Reduced memory overhead by 20-40% through object pooling and runtime memory management, minimizing GC pressure and improving application stability under load. Designed and maintained MongoDB schemas for player statistics and game events, powering a real-time web dashboard for internal analytics. Built CI/CD pipelines using Jenkins and GitHub Actions, running automated test suites on AWS EC2 - covering unit and integration tests across backend services and game logic layers. Led a team of 4 engineers in an Agile environment, collaborating with PM, UI/UX, and QA to ship a live in-house game project end-to-end.',
        techStack: ['Unity', 'C#', 'Photon-Fusion', 'PlayFab', 'Node Js', 'Redis', 'AWS', 'EC2', 'Jenkins CI/CD Pipeline', 'Docker', 'Git', 'GitHub Actions', 'NUnit Test Framework', 'DoTween', 'MongoDB'],
      },
  {
    role: 'Full Stack Developer Intern',
    company: 'Digilab Technologies',
    period: '2 Months ( Feb 2023 - April 2023)',
    description: 'Implemented School dashboard functionalities such as Attendance , Fee Payment, Exam schedule, PTM, Holiday Calendar, Event Announcement, Home work reduced class progress loading time by 60% using Redis caching.',
    techStack: ['Next Js', 'Node Js', 'Express Js', 'Firebase Firestore', 'Tailwind CSS', 'Material UI', 'AWS EC2', 'Github', 'MongoDB'],
  },
];

export const projects = [
  {
    id: 'project-1',
    title: 'Notification Microservice',
    description: 'A production-ready, event-driven notification system built with Java Spring Boot, designed for extensibility and deployed in a secure AWS VPC environment.',
    technologies: ['Java', 'Springboot', 'Docker', 'RabbitMQ'],
    image: FLASH_AUTH_IMG2,
    githubUrl: 'https://github.com/jagwar7/jagwar-notification-service',
    liveUrl: '/projects/project-1',
    deploymentUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Flash ⚡ Auth Backend',
    description: 'Flash⚡Auth is a plug-and-play authentication service for React apps — integrate Google OAuth, manage users in your own database, and skip writing backend auth logic entirely. Setup time: from 2 days to 5 minutes.',
    technologies: ['Node Js', 'Typescript', 'Express Js', 'MongoDB', 'RestAPI', 'Firebase OAuth', 'Redis', 'RabbitMQ', 'Docker', 'Jenkins CI/CD', 'AWS EC2', 'SSM', 'S3', 'VPC'],
    image: FLASH_AUTH_IMG1,
    githubUrl: 'https://github.com',
    liveUrl: '/projects/project-2',
    deploymentUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Flash ⚡Auth SDK',
    description: 'This SDK is will help you to integrate Flash⚡Auth in your React site without writing any code.',
    technologies: ['Typescript'],
    image: FLASH_AUTH_IMG1,
    githubUrl: 'https://github.com',
    liveUrl: '/projects/project-3',
    deploymentUrl: '#',
  },
];

export const socialLinks = [
    {
        name: 'Email',
        href: `mailto:${personalData.contact.email}`,
        icon: Mail,
    },
    {
        name: 'LinkedIn',
        href: personalData.contact.linkedin,
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        href: personalData.contact.github,
        icon: Github,
    }
];

export const navLinks = [
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
];
