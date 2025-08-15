import {
  RiGithubFill,
  RiLinkedinFill,
  RiCodeSSlashLine,
} from "@remixicon/react";

export const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About me", href: "#about" },
  { id: 3, label: "Resume", href: "#resume" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    href: "https://linkedin.com/in/kshtjn",
  },
  {
    id: 2,
    icon: RiGithubFill,
    href: "https://github.com/fiercfly",
  },
  {
    id: 3,
    icon: RiCodeSSlashLine, // Using a better icon for LeetCode
    href: "https://leetcode.com/u/kshtjn/",
  },
];

// --- UPDATED SKILLS ---
export const aboutItems = [
  { id: 1, label: "React.js, Node.js, Express.js, EmailJS" },
  { id: 2, label: "HTML5, CSS3, Tailwind CSS" },
  { id: 3, label: "JavaScript (ES6+), Java, C++" },
  { id: 4, label: "MongoDB, MySQL" },
  { id: 5, label: "Git, GitHub, REST APIs" },
  { id: 6, label: "Data Structures & Algorithms" },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        role: "MWF contributor(coding domain)",
        label: "Scale.ai",
        time: "2025 - Present",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Bennett University",
        role: "B.Tech in Comp Sci & Eng",
        time: "2022 - 2026",
      },
    ],
  },
  {
    id: 3,
    title: "Achievements",
    list: [
      { role: "Dean's List Honoree", label: "Top 60 of 1700+ students" },
      { role: "LeetCode Rating: 1879(KNIGHT)", label: "750+ Problems Solved | 600+ Days of consistent Streak" },
      { role: "Global Rank 733", label: "LeetCode Biweekly Contest 142 (Top 2%)" },
      { role: "Hackdata 2024 Finalist", label: "Competed against 673 teams" },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "Portfolio Website",
    src: "/images/portfolio.png",
    text: "My personal portfolio built with React and Tailwind CSS. This fully responsive site features dynamic navigation via Intersection Observer API and a secure contact form powered by EmailJS. The UX is enhanced with fluid animations from Framer Motion and GSAP.",
    deployLink: "https://akshatjain.vercel.app", // Add your deployed link
    githubLink: "https://github.com/fiercfly/portfolio-website",
  },
  {
    id: 2,
    title: "Home Electrics",
    src: "/images/home-electrics.png",
    text: "A full-stack e-commerce platform with user authentication, product filtering, and secure payments via the Stripe API.",
    deployLink: "https://home-electrics.vercel.app",
    githubLink: "https://github.com/fiercfly/HomeElectrics",
  },
  {
    id: 3,
    title: "CountryData",
    src: "/images/countrydata.png",
    text: "A responsive web app using the RestCountries API to display data for over 250 countries, with search, filtering, and dark mode.",
    deployLink: "https://countrydata-akshat.vercel.app",
    githubLink: "https://github.com/fiercfly/RestCountries",
  },
];

export const contactItems = [
  { id: 1, label: "Email:", link: "akshatbirawat@gmail.com" },
  { id: 2, label: "Phone:", link: "+91 8963008378" },
  { id: 3, label: "Location:", link: "Greater Noida, India" },
];