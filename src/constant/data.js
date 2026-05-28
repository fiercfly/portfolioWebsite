import {
  RiGithubFill,
  RiLinkedinFill,
  RiCodeSSlashLine,
  RiVideoChatLine,
  RiTerminalBoxLine,
  RiStackLine,
  RiNodejsLine,
  RiReactjsLine,
  RiJavascriptLine,
  RiDatabase2Line,
  RiCloudLine,
  RiSwordLine,
  RiAwardLine,
  RiTrophyLine,
  RiMacbookLine,
  RiGraduationCapLine,
} from "@remixicon/react";

export const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Timeline", href: "#timeline" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Skills", href: "#skills" },
  { id: 5, label: "Contact", href: "#contact" },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    href: "https://linkedin.com/in/kshtjn",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: RiGithubFill,
    href: "https://github.com/fiercfly",
    label: "GitHub",
  },
  {
    id: 3,
    icon: RiCodeSSlashLine,
    href: "https://leetcode.com/u/kshtjn/",
    label: "LeetCode",
  },
];

export const aboutItems = [
  { id: 1, label: "Full Stack Development (Node.js, React, Next.js)" },
  { id: 2, label: "Video Engineering (Konva.js, Remotion, FFmpeg WASM)" },
  { id: 3, label: "Cloud Architecture (AWS Lambda, Vercel, Render)" },
  { id: 4, label: "AI Evaluation & RLHF (Scale AI)" },
  { id: 5, label: "Problem Solving (Knight on LeetCode, 1870+ Rating)" },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Work Experience",
    list: [
      {
        role: "Software Development Engineer",
        label: "Appy Pie LLP",
        time: "Dec 2025 – Present",
        description: "Architected a Scene Builder video tool, optimized canvas rendering with Konva.js (60% boost), and designed scalable Node.js backend services.",
      },
      {
        role: "Software Quality & LLM Evaluation Engineer",
        label: "Scale AI",
        time: "Apr 2025 – Dec 2025",
        description: "Evaluated 500+ AI-generated code solutions and refined RLHF workflows for production-ready models.",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Bennett University",
        role: "B.Tech in Computer Science and Engineering",
        time: "2022 – 2026",
        description: "CGPA: 8.8 | Dean's List (Top 3.5%)",
      },
    ],
  },
  {
    id: 3,
    title: "Achievements",
    list: [
      { role: "Knight Badge (LeetCode)", label: "1870 Rating | 750+ Problems Solved", icon: RiSwordLine },
      { role: "Global Rank 733 / 37,816", label: "LeetCode Biweekly Contest 142", icon: RiAwardLine },
      { role: "Hackdata 2024 Finalist", label: "Top 670 teams | Dean's List (Top 3.5%)", icon: RiTrophyLine },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "VidBuilder",
    src: "/images/vidbuilder.png", 
    tag: "Flagship Project",
    text: "A high-performance browser-based video editor with multi-track drag-and-drop timelines. Built with React 18, Konva, and FFmpeg WASM. Handles 50+ concurrent items with smooth 30fps playback.",
    deployLink: "https://vidbuilder.vercel.app",
    githubLink: "https://github.com/fiercfly/VidBuilder",
    tech: ["React", "Konva.js", "Node.js", "FFmpeg", "Remotion"],
  },
  {
    id: 2,
    title: "DesCamcorder",
    src: "/images/descamcorder.png",
    tag: "Desktop App",
    text: "A professional cross-platform desktop application for high-performance screen recording and video management. Features hardware-accelerated capture and asynchronous processing with FFmpeg.",
    deployLink: "https://github.com/fiercfly/descamcorder",
    githubLink: "https://github.com/fiercfly/descamcorder",
    tech: ["Electron", "Node.js", "FFmpeg", "IPC"],
  },
  {
    id: 3,
    title: "ProteinHunt",
    src: "/images/protein-hunt.png",
    tag: "AI Deal Aggregator",
    text: "Automated deal discovery platform using Reddit API for data ingestion and a Groq-based LLM pipeline for parsing and structuring high-value deals into a searchable interface.",
    deployLink: "#",
    githubLink: "https://github.com/fiercfly/ProteinHunt",
    tech: ["Node.js", "Express", "MongoDB", "Groq API"],
  },
  {
    id: 4,
    title: "AIBillAnalyzer",
    src: "/images/ai-bill-analyzer.png",
    tag: "Intelligent Doc Parser",
    text: "AI-powered document analysis tool that automates the extraction of key financial metrics from complex invoices and bills with high precision using Llama 4 Scout.",
    deployLink: "#",
    githubLink: "https://github.com/fiercfly/AIBillAnalyzer",
    tech: ["React", "Node.js", "Llama 4", "Tailwind"],
  },
  {
    id: 5,
    title: "HomeElectrics",
    src: "/images/home-electrics.png",
    tag: "E-commerce Platform",
    text: "Comprehensive MERN stack e-commerce platform with JWT authentication and full Stripe payment integration. Optimized for latency and secure transaction handling.",
    deployLink: "https://home-electrics.vercel.app",
    githubLink: "https://github.com/fiercfly/HomeElectrics",
    tech: ["MongoDB", "Express", "React", "Node", "Stripe"],
  },
];

export const contactItems = [
  { id: 1, label: "Email", link: "akshatbisrawat9@gmail.com", icon: RiTerminalBoxLine },
  { id: 2, label: "Phone", link: "+91-8963008878", icon: RiTerminalBoxLine },
  { id: 3, label: "Location", link: "Noida, India", icon: RiTerminalBoxLine },
];

export const techStack = [
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: RiMacbookLine },
  { name: "React.js", icon: RiReactjsLine },
  { name: "Next.js", icon: RiReactjsLine },
  { name: "Redux", icon: RiCodeSSlashLine },
  { name: "HTML5", icon: RiMacbookLine },
  { name: "CSS3", icon: RiMacbookLine },
  { name: "Bootstrap", icon: RiMacbookLine },
  { name: "Tailwind CSS", icon: RiMacbookLine },
  { name: "Node.js", icon: RiNodejsLine },
  { name: "Express.js", icon: RiTerminalBoxLine },
  { name: "Spring", icon: RiMacbookLine },
  { name: "REST APIs", icon: RiStackLine },
  { name: "JWT / OAuth", icon: RiStackLine },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "MongoDB", icon: RiStackLine },
  { name: "MySQL", icon: RiDatabase2Line },
  { name: "Docker", icon: RiMacbookLine },
  { name: "AWS Lambda", icon: RiCloudLine },
  { name: "GitHub Actions", icon: RiGithubFill },
  { name: "CI/CD", icon: RiCloudLine },
  { name: "FFmpeg", icon: RiMacbookLine },
  { name: "Remotion", icon: RiVideoChatLine },
  { name: "Python", icon: RiMacbookLine },
  { name: "Java", icon: RiMacbookLine },
  { name: "C++", icon: RiMacbookLine },
  { name: "SQL", icon: RiDatabase2Line },
];
