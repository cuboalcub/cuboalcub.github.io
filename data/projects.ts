import { Project, Profile } from '@/types';

export const profile: Profile = {
    name: "Felipe", // Replace with your actual name
    title: "Full Stack Developer",
    bio: "Passionate developer building web applications with modern technologies. I love creating clean, efficient, and scalable code.",
    avatar: "/avatar.placeholder.png", // specific path for now, will need to be replaced
    socials: [
        { platform: "GitHub", url: "https://github.com", icon: "github" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
        { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
    ]
};

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
        slug: "e-commerce-platform",
        image: "/project1.placeholder.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
        link: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce",
        featured: true
    },
    {
        id: "2",
        title: "Task Management App",
        description: "A collaborative task management tool for teams. Real-time updates, drag-and-drop interface, and team workspaces.",
        slug: "task-management-app",
        image: "/project2.placeholder.png",
        technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
        link: "https://example.com/taskmanager",
        github: "https://github.com/example/taskmanager",
        featured: true
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard providing detailed forecasts and historical data visualization.",
        slug: "weather-dashboard",
        image: "/project3.placeholder.png",
        technologies: ["Vue.js", "Chart.js", "OpenWeatherMap API"],
        link: "https://example.com/weather",
        github: "https://github.com/example/weather",
        featured: false
    }
];
