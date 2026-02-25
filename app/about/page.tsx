import { profile } from "@/data/projects";

export const metadata = {
    title: "Sobre mí - Felipe Portfolio",
    description: "Learn more about my background and experience",
};

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        About Me
                    </h1>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-gray-400">
                        <p>
                            Hola, soy {profile.name}, un {profile.title}.
                        </p>
                        <p>
                            {profile.bio}
                        </p>
                        <p>
                            Me especializo en la creación de sitios web y aplicaciones para moviles  utilizando herramientas modernas como React,React Native, y Tailwind CSS.
                            Mi viaje comenzó hace 2 años, y he trabajado en una variedad de proyectos que van desde sitios web de pequeñas empresas.
                        </p>
                        <h3>Skills</h3>
                        <ul>
                            <li>Frontend: React,React Native, Tailwind CSS, HTML5, CSS3, TypeScript</li>
                            <li>Backend: Node.js, Python, Java, Express, PostgreSQL,Prisma, Django</li>
                            <li>Tools: Git, Docker</li>
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
                                    <span className="text-lg font-medium">{social.platform}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
