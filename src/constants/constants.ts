import htmlImg from '../assets/tech/html.png';
import typescriptImg from '../assets/tech/typescript.png';
import javascriptImg from '../assets/tech/javascript.png';
import reactImg from '../assets/tech/react.png';
import tailwindImg from '../assets/tech/tailwind.jpg';
import cssImg from '../assets/tech/css.png';
import viteImg from '../assets/tech/vite.svg';
import gitImg from '../assets/tech/git.png';
import githubImg from '../assets/tech/github.png';
import gitlabImg from '../assets/tech/gitlab.png';
import vueImg from '../assets/tech/vue.png';
import angularImg from '../assets/tech/angular.png';
import dockerImg from '../assets/tech/docker.png';
import bootstrap from '../assets/tech/bootstrap.png';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { IconType } from 'react-icons';
import { FaHome, FaLinkedin, FaGithub } from 'react-icons/fa';
import fiitLogo from '../assets/fiit.png';

export const navLinks: {
  name: string;
  id: string;
}[] = [
  {
    name: 'About',
    id: '#about',
  },
  {
    name: 'Skills',
    id: '#skill',
  },
  {
    name: 'Experience',
    id: '#exp',
  },
  {
    name: 'Projects',
    id: '#projects',
  },
  {
    name: 'Contact',
    id: '#contact',
  },
];

export const techList: {
  level: string;
  style: string;
  skills: string[];
}[] = [
  {
    level: 'Proficient',
    style: 'border-yellow-300 text-yellow-300',
    skills: [htmlImg, typescriptImg, javascriptImg, reactImg, tailwindImg],
  },
  {
    level: 'Skillful',
    style: 'border-purple-300 text-purple-300',
    skills: [cssImg, gitImg, githubImg, gitlabImg, viteImg],
  },
  {
    level: 'Basic',
    style: 'border-blue-300 text-blue-300',
    skills: [vueImg, angularImg, dockerImg, bootstrap],
  },
];

export const contactList: {
  Icon: IconType;
  title: string;
  onClick?: () => void;
}[] = [
  {
    Icon: IoIosCall,
    title: '+421 904 621 427',
  },
  {
    Icon: MdEmail,
    title: 'drozdjaro1@gmail.com',
  },
  {
    Icon: FaHome,
    title: 'Bratislava, Slovak Republic',
  },
  {
    Icon: FaLinkedin,
    title: 'LinkedIn',
    onClick: () =>
      window.open('https://www.linkedin.com/in/jaroslav-drozd)', '_blank'),
  },
  {
    Icon: FaGithub,
    title: 'GitHub',
    onClick: () => window.open('https://github.com/JaroslavDrozd000', '_blank'),
  },
];

export const experienceList: {
  img: string;
  job: string;
  where: string;
  duration: string;
  description: string[];
}[] = [
  {
    img: fiitLogo,
    job: 'Frontend Developer',
    where: 'Faculty of Informatics and Information Technologies STU',
    duration: 'Jun 2023 - Present',
    description: [
      'Worked as a frontend developer on a project aimed at building a digital library for students across all faculties of STU',
      'Initially focused on fixing visual and functional bugs in Angular and later implemented new features and adjusted API calls to new backend endpoints',
      'Proposed and led a full transition from Angular to React for better flexibility, including a complete redesign of the frontend',
      'In React, implemented custom hooks for RESTful API, state management, authorization, authentication, performance optimization, component creation, UMAMI analytics integration and responsive design',
      'Developed a GitHub library for reading and manipulating PDF documents using pdfjs-dist, with a focus on creating intuitive UX for document visualization and manipulation in the digital library',
    ],
  },
];
