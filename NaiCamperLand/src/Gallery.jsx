import projects from "./projects";
import ProjectCard from "./ProjectCard";

export default function Gallery() {
  return (
    <section
      id="proyectos"
      className="max-w-7xl mx-auto py-20 px-8"
    >
      <h2 className="text-4xl font-bold mb-10">
        Nuestros Proyectos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}