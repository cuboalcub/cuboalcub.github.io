import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";
interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-dark sm:text-4xl md:text-5xl">
                    {project.title}
                </h1>
                <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                    {project.description}
                </p>
            </div>

            <div className="mt-12">
                {project.images && project.images.length > 0 ? (
                    <Carousel images={project.images} />
                ) : (
                    <div className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-2xl relative flex items-center justify-center">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                )}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 prose prose-indigo prose-lg text-gray-500 dark:text-gray-400">
                    <h3 className="text-gray-900 dark:text-dark">{project.title}</h3>
                    <div className="mt-4 space-y-4">
                        {project.content}
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Details</h3>
                        <div className="mt-4 space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</h4>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.link && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Live Demo</h4>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-1 block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                        View Site &rarr;
                                    </a>
                                </div>
                            )}
                            {project.github_front && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Código Fuente (Frontend)</h4>
                                    <a href={project.github_front} target="_blank" rel="noopener noreferrer" className="mt-1 block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                        Código Fuente  &rarr;
                                    </a>
                                </div>
                            )}
                            {project.github_back && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Código Fuente (Backend)</h4>
                                    <a href={project.github_back} target="_blank" rel="noopener noreferrer" className="mt-1 block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                        Código Fuente  &rarr;
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
                <Link href="/projects" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 flex items-center">
                    &larr; Volver al portafolio
                </Link>
            </div>
        </article>
    );
}
