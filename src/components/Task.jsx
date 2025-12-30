import React from 'react'

export default function Task({tasks,setTasks,project,projects,setProjects}) {
  const handleDelete = (id) => {
    let updatedTasks = tasks.filter((t) => t.id !==id )

    let updatedProject = projects.map((p) => p.id === project.id ? {...p,tasks:updatedTasks} : p )
    setProjects(updatedProject)
    setTasks(updatedTasks)
    console.log(project);
  }
return (
    <div className="mt-6">
     <ul className="space-y-3">
      {tasks.map((t) => (
        <li key={t.id} className="flex items-center justify-between bg-stone-100 px-4 py-3 rounded-md"><span className="text-stone-700">{t.title} </span>
        <button onClick={() => handleDelete(t.id)} className="text-stone-500 hover:text-red-500 text-sm">Clear</button></li>
      ))}
     </ul>
    </div>
  )
}
