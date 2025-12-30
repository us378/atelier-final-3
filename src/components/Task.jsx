// export default function Tasks({ project, projects, setProjects, tasks, setTasks }) {
//   function deleteTask(id) {
//     const updatedTasks = tasks.filter((t) => t.id !== id);

//     const updatedProjects = projects.map((p) =>
//       p.id === project.id ? { ...p, tasks: updatedTasks } : p
//     );
//     setProjects(updatedProjects);

//     setTasks(updatedTasks);
//   }

//   if (!tasks || tasks.length === 0)
//     return <p className="text-gray-500">No tasks yet — add one above</p>;

//   return (
//     <ul className="space-y-2">
//       {tasks.map((task) => (
//         <li
//           key={task.id}
//           className="flex justify-between items-center bg-gray-100 p-2 rounded"
//         >
//           <span>{task.title}</span>
//           <button
//             onClick={() => deleteTask(task.id)}
//             className="text-red-600 text-sm hover:underline"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
