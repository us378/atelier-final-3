import React from "react";

export default function ProjectsSidebar({projects,selectedProjectId, onSelectProject, onStartAddProject}) {
  return (
    <div className="w-72 bg-stone-900 text-stone-200 p-6 flex flex-col">
      <h1  className="uppercase text-xs font-semibold tracking-widest mb-6 text-stone-400">Projects</h1>
      <ul className="flex-1 overflow-y-auto space-y-2">
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelectProject(project.id)}
            className={`cursor-pointer px-3 py-2 rounded-md transition`}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <button onClick={onStartAddProject} className="mt-6 px-4 py-2 bg-stone-700 text-stone-200 rounded-md text-sm font-medium hover:bg-stone-600 transition">
        + Add Project
      </button>
    </div>
  );
}

