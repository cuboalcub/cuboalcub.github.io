import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
            <div className="shrink-0">
                <div className="aspect-square w-full relative overflow-hidden">
                    <Image
                        className="object-contain transition-transform duration-500 hover:scale-105"
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {project.technologies.slice(0, 3).join(', ')}
                    </p>
                    <Link href={`/projects/${project.slug}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">{project.description}</p>
                    </Link>
                </div>
                <div className="mt-6">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="text-base font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Ver proyecto &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
