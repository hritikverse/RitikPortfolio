import { freelance, quickheal, opensource } from "../assets/images";
import askversepreview from '../assets/images/askversepreview.png';
import flavorversepreview from '../assets/images/flavorversepreview.png';
import fitfusionpreview from '../assets/images/fitfusionpreview.png';
import portfoliopreview from '../assets/images/portfoliopreview.png';
import {
    flavorverse,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    chatAI,
    react,
    tailwindcss,
    fitfusion,
    typescript,
    portfolio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Cyber Security Awareness Intern",
        company_name: "Quiuck Heal Foundation",
        icon: quickheal,
        iconBg: "#accbe1",
        date: "October 2023 - Feb 2024",
        points: [
            "Conducted seminars and workshops on cybersecurity awareness in schools and colleges.",
            "Educated users on identifying cyber threats and online safety measures.",
            "Collaborated with peers and mentors to research and present real-world cybersecurity case studies.",
            "Gained practical insights into social engineering, phishing, and personal data protection.",
            "Created infographics and blog content simplifying cybersecurity concepts for non-tech audiences.",
        ],
    },
    {
        title: "Freelance Web Developer / Personal Projects",
        company_name: "Self-Initiated",
        icon: freelance,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Remote",
        icon: opensource,
        iconBg: "#b7e4c7",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Learned and applied concepts of component reusability, state management, and responsive design.",
            "Contributed to GitHub repositories and documented projects with clear READMEs and demo videos.",
            "Explored contextual chat memory, chat export, pinned messages, and PDF generation features.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hritikverse',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritik-dubey',
    }
];

export const projects = [
    {
        iconUrl: chatAI,
        theme: 'btn-back-red',
        name: 'AI based Chat and Image Generation Website',
        description: 'Built an AI powered chat app using React and Tailwind CSS with a clean , responsive UI, Integrated with voice input, image generation, and downloadable responses.',
        link: 'https://hritikverse.github.io/AskVerse',
        tags: ['React', 'Tailwind CSS', 'API'],
        preview: askversepreview,
    },
    {
        iconUrl: portfolio, // or any other icon you prefer (e.g., portfolio icon if you have one)
        theme: 'btn-back-purple',
        name: '3D Animated Portfolio Website',
        description:
            'Built an interactive 3D animated developer portfolio using React, Three.js, Spline, Framer Motion, and Tailwind CSS. Features responsive design, dynamic project showcases, and immersive visuals.',
        link: 'https://hritikverse.github.io/MyPortfolio', // replace with your actual portfolio link
        tags: ['React', 'Three.js', 'Email.js', 'Tailwind CSS'],
        preview: portfoliopreview,
    },
    {
        iconUrl: fitfusion,
        theme: 'btn-back-green',
        name: 'Home Workout Android App',
        description: 'Developed a home workout app using Kotlin, XML, and Firebase. Added speech functionality for exercise guidance and countdown. ',
        link: 'https://drive.google.com/file/d/1PxWAD-XI9vfPonQt766pPXD6ce-ysBoi/view?usp=drive_link',
        tags: ['Android Studio', 'Kotlin', 'XML', 'Firebase'],
        preview: fitfusionpreview,
    },
    {
        iconUrl: flavorverse,
        theme: 'btn-back-blue',
        name: 'Informative & Interactive Recipe Website ',
        description: 'Built a recipe website using HTML, CSS, and JavaScript. Engaging UI and user-friendly design',
        link: 'https://hritikverse.github.io/FlavorVerse',
        tags: ['HTML', 'CSS', 'Javascript'],
        preview: flavorversepreview,
    }
];