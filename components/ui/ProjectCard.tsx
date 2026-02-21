import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
            <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-300 animate-pulse">
                    {/* Replace with actual Image implementation when real images are available */}
                    {/* <Image className="h-48 w-full object-cover" src={project.image} alt={project.title} width={300} height={200} /> */}
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Image Placeholder
                    </div>
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
                        Read full story &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
