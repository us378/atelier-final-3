export default function SelectedProject({ project ,projects,setProjects}) {
  if (!project) return null;
  const handleDelete = (project) => {
  const updatedProjects = projects.filter((p) => p.id !== project.id)
  setProjects(updatedProjects)
}

  return (
    <div className="bg-white p-6 rounded shadow">
  <div className="flex justify-end">
  <button
    onClick={() => handleDelete(project)}
    className="text-red-500 hover:text-gray-700 font-medium">
    delete
  </button>
</div>
      <h2 className="text-2xl font-semibold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-sm text-gray-400 mt-1">{project.date}</p>
    </div>
  );
}
