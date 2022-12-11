import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ project }) => {
  const { name, description, img, technology } = project;
  return (
    <div>
      <div className="d-flex gap-5 coll-12">
        <div className="coll-6">
          <img className="rounded-3 image" src={img} alt=""></img>
        </div>
        <div className="coll-6">
          <h1>{name}</h1>
          <p>{description}</p>
          {technology.map((tech) => (
            <span className="border rounded m-2 p-1" tech={tech}>
              {tech}
            </span>
          ))}

          <br />
          <br />
          <button className="btn btn-sm btn-outline-one icon-space-left">
            <Link to={`project/${name}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
