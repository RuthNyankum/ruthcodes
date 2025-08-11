// src/data/portfolioData.js
import portfolio from '../assets/images/portfolio.png';
import dashboard from '/src/assets/images/dashboard.png';
import calculator from '../assets/images/calculator.png';
import quiz from '../assets/images/quizapp.png';
import construction from '../assets/images/construction.png';
import hustlers from '../assets/images/hustlers.png';
import ai from '../assets/images/art-int.png';
import carelink from '../assets/images/carelink.png';
import rango from '../assets/images/rango.png';
import music from '../assets/images/music.png';

export const portfolioItems = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing my development skills and projects',
    image: portfolio,
    tags: ['React', 'Tailwind'],
    type: 'Development',
    liveLink: 'https://ruthcodez.netlify.app',
    githubLink: 'https://github.com/RuthNyankum/ruthcodes.git',
  },
  {
    id: 2,
    category: 'UI/UX Design',
    title: 'Student Management System',
    description:
      "Dashboard design for parents to track their children's academic performance",
    image: dashboard,
    tags: ['Figma'],
    type: 'Design',
    liveLink:
      'https://www.figma.com/design/KJpi2IOMTb2jtoWgGDLdlb/student-management?t=XlqZbnayorbFo8Hi-1',
  },
  {
    id: 3,
    category: 'Web Development',
    title: 'Calculator App',
    description: 'Responsive calculator with basic arithmetic operations',
    image: calculator,
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'Development',
    liveLink: 'https://tocalculator.netlify.app/',
    githubLink: 'https://github.com/RuthNyankum/calculator.git',
  },
  {
    id: 4,
    category: 'UI/UX Design',
    title: 'Interactive Quiz App',
    description:
      'Mobile quiz interface with multiple choice questions and results',
    image: quiz,
    tags: ['Figma', 'Prototype'],
    type: 'Design',
    liveLink:
      'https://www.figma.com/design/x30rwFmGLyZfNfLz0z0wwk/quiz-app?node-id=0-1&t=XlqZbnayorbFo8Hi-1',
  },
  {
    id: 5,
    category: 'Web Development',
    title: 'Construction Company Website',
    description:
      'Professional construction company landing page with responsive design',
    image: construction,
    tags: ['HTML', 'CSS', 'Media Queries'],
    type: 'Development',
    liveLink: 'https://webuilderclone.netlify.app/',
    githubLink: 'https://github.com/RuthNyankum/Construction.git',
  },
  {
    id: 6,
    category: 'UI/UX Design',
    title: 'Student Entrepreneurs Platform',
    description:
      'Booking platform connecting skilled students with potential clients',
    image: hustlers,
    tags: ['Figma'],
    type: 'Design',
    liveLink:
      'https://www.figma.com/design/cpNaVmLT3MWXESglyNUfjc/student-hustler?t=XlqZbnayorbFo8Hi-1',
  },
  {
    id: 7,
    category: 'Web Development',
    title: 'AI Technology Landing Page',
    description:
      'Modern landing page showcasing artificial intelligence solutions',
    image: ai,
    tags: ['Bootstrap'],
    type: 'Development',
    liveLink: 'https://art-interlligence.netlify.app/',
    githubLink: 'https://github.com/RuthNyankum/Artificial-Intelligence.git',
  },
  {
    id: 8,
    category: 'Web Development',
    title: 'CareLink Hospital Management',
    description:
      'Healthcare platform for patient appointment booking and management',
    image: carelink,
    tags: ['React'],
    type: 'Development',
    liveLink: 'https://carelink.netlify.app/',
    githubLink: 'https://github.com/RuthNyankum/CareLink-Frontend.git',
  },
  {
    id: 9,
    category: 'UI/UX Design',
    title: 'RanGo Web Development Agency',
    description: 'Landing page design for a web development agency showcase',
    image: rango,
    tags: ['Figma'],
    type: 'Design',
    liveLink:
      'https://www.figma.com/design/j5NG74JBDODbZhbhMBmDrc/Rango?t=XlqZbnayorbFo8Hi-1',
  },
  {
    id: 10,
    category: 'UI/UX Design',
    title: 'Music Player Interface',
    description:
      'Interactive music player app design with smooth user experience',
    image: music,
    tags: ['Figma'],
    type: 'Design',
    liveLink:
      'https://www.figma.com/design/2fsF809wO0NryxGcCBeh1A/Music?node-id=0-1&t=XlqZbnayorbFo8Hi-1',
  },
];

// Add this temporarily to see what's being imported
console.log('Images:', {
  portfolio,
  dashboard,
  calculator,
  // ... etc
});
