import { Project, Profile } from '@/types';

export const profile: Profile = {
    name: "Felipe Abisai", // Replace with your actual name
    title: "Ingeniero de Software",
    bio: "Soy un ingeniero de Software con experiencia en el desarrollo de aplicaciones webs y moviles. Tengo conocimiento como desarrollo y mantenimiento de software.",
    avatar: "/avatar.placeholder.png", // specific path for now, will need to be replaced
    socials: [
        { platform: "GitHub", url: "https://github.com/cuboalcub", icon: "github" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/felipe-abisai-vera-rodriguez-899244234/", icon: "linkedin" },
        { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
    ]
};

export const projects: Project[] = [
    {
        id: "1",
        title: "FVH App - Forraje Verde Hidropónico",
        description: "Aplicación móvil para gestionar y monitorear invernaderos de forraje verde hidropónico.",
        content: " Aplicación móvil orientada al monitoreo y gestión de invernaderos de forraje verde hidropónico (FVH), permitiendo supervisar variables ambientales en tiempo real y controlar procesos ." +
            "El sistema permitió centralizar datos provenientes de sensores (temperatura, humedad, riego, etc.) y ofrecer visualización y control desde una aplicación móvil conectada a un backend con comunicación en tiempo real, "
            + "durante el desarrollo de esta aplicacion estuve en el rol de la conexion con el desarrollo del backend y las distintas conexioes de los diferentes componentes del sistema.",
        slug: "fvh-app",
        image: "/fvh/1.jpeg",
        images: ["/fvh/1.jpeg", "/fvh/2.jpeg", "/fvh/3.jpeg", "/fvh/4.jpeg", "/fvh/5.jpeg", "/fvh/6.jpeg", "/fvh/7.jpeg", "/fvh/8.jpeg", "/fvh/9.jpeg", "/fvh/10.jpeg"],
        technologies: ["React Native - Expo", "TypeScript", "Tailwind CSS", "PostgreSQL", "Django", "EMQX"],
        github: "https://github.com/cuboalcub/FVH_front/tree/admin",
        featured: true
    },
]

























