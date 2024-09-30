import htmlImg from '../assets/tech/html.png';
import typescriptImg from '../assets/tech/typescript.png';
import javascriptImg from '../assets/tech/javascript.png';
import reactImg from '../assets/tech/react.png';
import tailwindImg from '../assets/tech/tailwind.jpg';
import cssImg from '../assets/tech/css.png';
import gitImg from '../assets/tech/git.png';
import githubImg from '../assets/tech/github.png';
import gitlabImg from '../assets/tech/gitlab.png';
import vueImg from '../assets/tech/vue.png';
import angularImg from '../assets/tech/angular.png';
import dockerImg from '../assets/tech/docker.png';

export const navLinks: {
  name: string;
  id: string;
}[] = [
  {
    name: 'Home',
    id: '#hero',
  },
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
    skills: [cssImg, gitImg, githubImg, gitlabImg],
  },
  {
    level: 'Basic',
    style: 'border-blue-300 text-blue-300',
    skills: [vueImg, angularImg, dockerImg],
  },
];
