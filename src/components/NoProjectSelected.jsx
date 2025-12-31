import React from 'react'
import Image from "../assets/no-projects.png"

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-stone-600">
      
      <img
        src={Image}
        alt="No project"
        className="w-16 h-16 opacity-80"
      />

      <h1 className="text-xl font-semibold text-stone-700">
        No Project Selected
      </h1>

      <p className="text-sm text-stone-500 max-w-xs">
        Select a project or get started with a new one
      </p>

      <button
        onClick={onStartAddProject}
        className="mt-2 px-5 py-2 rounded-md bg-stone-700 text-white text-sm font-medium
                   hover:bg-stone-800 transition"
      >
        + Add Project
      </button>

    </div>
  )
}

export default NoProjectSelected
