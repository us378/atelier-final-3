// import React from "react";

// export default function ProjectsSidebar({projects,selectedProjectId, onSelectProject, onStartAddProject}) {
//   return (
//     <div className="flex flex-col h-full">
//       <h1 className="text-xl font-bold mb-4">Projects</h1>
//       <ul className="flex-1 overflow-y-auto space-y-2">
//         {projects.map((project) => (
//           <li key={project.id} onClick={() => onSelectProject(project.id)}
//             className={`cursor-pointer p-2 rounded ${
//               selectedProjectId === project.id
//                 ? "bg-stone-700 text-white font-semibold"
//                 : "text-gray-300 hover:bg-stone-800"
//             }`}
//           >
//             {project.title}
//           </li>
//         ))}
//       </ul>
//       <button onClick={onStartAddProject} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//         + Add Project
//       </button>
//     </div>
//   );
// }
