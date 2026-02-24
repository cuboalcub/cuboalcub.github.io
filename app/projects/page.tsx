
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata = {
    title: "Projects - Felipe's Portfolio",
    description: "A collection of my projects and work.",
};

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Proyectos
                </h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Aquí está una lista completa de los proyectos en los que he trabajado.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
