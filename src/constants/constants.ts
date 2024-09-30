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
