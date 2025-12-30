import React, { useState } from 'react'

function NewTasks({tasks,setTasks,project,projects,setProjects}) {
    const [input,setInp] = useState("")
    const addTask = (e) => {
        e.preventDefault()
        let newTask = {id:tasks.length + 1,title:input}
        let updatedProject = projects.map((p) => p.id === project.id ? {...p,tasks:[...p.tasks,newTask]} : p)
        setProjects(updatedProject)
        setTasks([...tasks,newTask])
        console.log(tasks);
        console.log(updatedProject);
        setInp("")
    }
  return (
    <div className="flex items-center gap-3 mt-4">
        <input className="flex-1 bg-stone-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400"
 type="text" value={input} onChange={(e) => setInp(e.target.value) } />
        <button onClick={addTask} className="text-stone-600 hover:text-stone-900 font-medium"
>add Tasks</button>
    </div>
  )
}

export default NewTasks
