import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewProject from './components/NewProject';

function App() {
  const [projects, setProjects] = useState({})
  return (
    <>
      <NewProject projects={projects} setProjects={setProjects} />
    </>
  );
}

export default App;
