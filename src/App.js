import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
import ProjectsSidebar from "./components/ProjectSidebar";
import NewTask from "./components/NewTasks";
import Tasks from "./components/Task";
import NewProject from "./components/NewProject";


export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null || undefined || Number);
  const [tasks, setTasks] = useState([]);
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  const [addingProject, setAddingProject] = useState(false);
  console.log(selectedProject);
  

  const handleStartAddProject = () => {
    setAddingProject(true);
  };

  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
    setAddingProject(false);
  };
  return (
    <div className="flex h-screen">
      <aside className="w-80 bg-stone-900 text-white p-4">
        <ProjectsSidebar projects={projects} selectedProjectId={selectedProjectId} onSelectProject={setSelectedProjectId} onStartAddProject={handleStartAddProject} />
      </aside>

      <main className="flex-1 space-y-6">
        {addingProject && (
          <NewProject projects={projects} setProjects={handleProjectAdded} />
        )}
        {!selectedProject && <p className="p-8">Select a project or create one.</p>}

        {selectedProject && (
          <>
          <SelectedProject  project={selectedProject} />
          <NewTask tasks={tasks} setTasks={setTasks} project={selectedProject} projects={projects} setProjects={setProjects}/>
          <Tasks tasks={tasks} setTasks={setTasks} project={selectedProject} projects={projects} setProjects={setProjects}/>
          </>
        )}
      </main>
    </div>
  );
}
