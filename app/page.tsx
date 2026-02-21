import Link from "next/link";
import { projects, profile } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hola, soy {profile.name}</span>{' '}
              <span className="block text-indigo-600 xl:inline">{profile.title}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {profile.bio}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Ver mi trabajo
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Contactarme
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            {/* Placeholder for Hero Image */}
            <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-xl">
              <div className="text-gray-400">Hero Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ver algunos de mis proyectos recientes.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 shadow-sm ring-1 ring-gray-900/5"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}
