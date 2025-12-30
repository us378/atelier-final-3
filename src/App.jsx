import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
import ProjectsSidebar from "./components/ProjectSidebar";
import NewTask from "./components/NewTasks";
import Tasks from "./components/Task";
import NewProject from "./components/NewProject";


export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);

  
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;


  return (
    <div className="flex h-screen">
      <aside className="w-80 bg-stone-900 text-white p-4">
        <ProjectsSidebar />
      </aside>

      <main className="flex-1 p-8 space-y-6">
        {!selectedProject && <p>Select a project or create one.</p>}

        {selectedProject && (
          <>
          <NewProject/>
            <SelectedProject  />

            <NewTask
              
            />

            <Tasks
            
            />
          </>
        )}
      </main>
    </div>
  );
}
