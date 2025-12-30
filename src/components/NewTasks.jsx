// import { useState } from "react";

// export default function NewTask({ project, projects, setProjects, tasks, setTasks }) {
//   const [value, setValue] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!value.trim()) return;

//     const newTask = { id: Date.now().toString(), title: value };

//     // Update tasks for the selected project
//     const updatedProjects = projects.map((p) =>
//       p.id === project.id ? { ...p, tasks: [...p.tasks, newTask] } : p
//     );
//     setProjects(updatedProjects);

//     // Update local tasks state
//     setTasks([...tasks, newTask]);
//     setValue("");
//   }

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2">
//       <input
//         className="border px-3 py-2 flex-1 rounded"
//         placeholder="New task..."
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button className="px-4 py-2 bg-black text-white rounded">Add</button>
//     </form>
//   );
// }
