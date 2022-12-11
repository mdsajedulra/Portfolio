import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="container my-5">
      <h1>Projects</h1>
      <div className="d-flex flex-column gap-5">
        {projects.map((project, i) => (
          <Project project={project} key={i}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
