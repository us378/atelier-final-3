export default function SelectedProject({ project }) {
  if (!project) return null;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-sm text-gray-400 mt-1">{project.date}</p>
    </div>
  );
}
