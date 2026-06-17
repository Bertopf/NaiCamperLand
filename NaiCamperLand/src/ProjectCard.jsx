export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-xl">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {project.description}
        </p>

        <p className="font-bold mt-3">
          {project.price}
        </p>
      </div>
    </div>
  );
}