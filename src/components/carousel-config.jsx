import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs, FaJs } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiC } from "react-icons/si";

export const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "C", icon: <SiC /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
];


const projects = [
  {
    name: 'Choreoscope',
    description: 'AI-based mudra recognition app using Flutter & DL. This project demonstrates advanced deep learning techniques applied to real-time gesture recognition.',
    gitLink: 'https://github.com/your-repo/choreoscope', // Replace with actual Git link
    uiLink: 'https://your-demo.com/choreoscope', // Replace with actual UI/demo link
    image: 'https://placehold.co/600x400/00d4ff/ffffff?text=Choreoscope+UI' // Placeholder image
  },
  {
    name: 'Automated Fish Feeder',
    description: 'Smart aquaculture feeding system designed to optimize feeding schedules and reduce waste using IoT sensors and automated dispensers.',
    gitLink: 'https://github.com/your-repo/fish-feeder', // Replace with actual Git link
    uiLink: 'https://your-demo.com/fish-feeder', // Replace with actual UI/demo link
    image: 'https://placehold.co/600x400/00d4ff/ffffff?text=Fish+Feeder+UI' // Placeholder image
  },
  {
    name: 'JWST Stories',
    description: 'Web app visualizing space telescope images interactively, allowing users to explore celestial phenomena with rich data overlays and narratives.',
    gitLink: 'https://github.com/your-repo/jwst-stories', // Replace with actual Git link
    uiLink: 'https://your-demo.com/jwst-stories', // Replace with actual UI/demo link
    image: 'https://placehold.co/600x400/00d4ff/ffffff?text=JWST+Stories+UI' // Placeholder image
  },
];
