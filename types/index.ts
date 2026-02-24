
export interface Project {
    id: string;
    title: string;
    description: string;
    content: string;
    slug: string;
    image: string;
    images?: string[];
    technologies: string[];
    link?: string;
    github?: string;
    featured?: boolean;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string; // We can use icon names or SVG paths
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    socials: SocialLink[];
}
