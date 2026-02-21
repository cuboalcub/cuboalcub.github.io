import { profile } from "@/data/projects";
import Image from "next/image";

export const metadata = {
    title: "Sobre mí - Felipe Portfolio",
    description: "Learn more about my background and experience",
};

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                    <div className="aspect-w-1 aspect-h-1 rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl flex items-center justify-center h-full min-h-[400px]">
                        {/* Replace with actual Avatar implementation */}
                        {/* <Image 
                src={profile.avatar} 
                alt={profile.name} 
                className="object-cover" 
                width={500} 
                height={500} 
            /> */}
                        <div className="text-gray-400">Avatar Placeholder</div>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-7">
                    <div className="pl-0 lg:pl-12">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            About Me
                        </h1>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-gray-400">
                            <p>
                                Hola, soy {profile.name}, un {profile.title} based in [Your Location].
                            </p>
                            <p>
                                {profile.bio}
                            </p>
                            <p>
                                Me especializo en la creación de sitios web y aplicaciones de alta calidad utilizando herramientas modernas como React, Next.js, y Tailwind CSS.
                                Mi viaje en el desarrollo web comenzó hace [Years] años, y he trabajado en una variedad de proyectos que van desde sitios web de pequeñas empresas hasta aplicaciones empresariales de gran escala.
                            </p>
                            <h3>Skills</h3>
                            <ul>
                                <li>Frontend: React, Next.js, Vue.js, Tailwind CSS, HTML5, CSS3</li>
                                <li>Backend: Node.js, Express, PostgreSQL, MongoDB, Prisma</li>
                                <li>Tools: Git, Docker, AWS, Vercel</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Connect with me</h3>
                            <div className="mt-4 flex space-x-6">
                                {profile.socials.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">{social.platform}</span>
                                        {/* We can dynamically render icons here if we map them in a utility, for now just text or simple SVG placeholders */}
                                        <span className="text-lg font-medium">{social.platform}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
