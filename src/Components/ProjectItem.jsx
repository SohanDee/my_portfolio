import React from "react";
import projects from "../projects";

export default function ProjectItem() {
  return (
    <div>
      {projects.map((project, id) => (
        <div className="shadow-md flex flex-raw rounded-xl" key={id}>
          <div className="rounded-lg">
            <img
              className="max-w-80 max-h-80 m-5 rounded-lg"
              src={project.image}
              alt=""
            />
          </div>
          <div className="flex flex-col text-left  p-5 font-poppins">
            <h2 className="text-2xl  font-semibold">{project.name}</h2>
            <p className="text-justify pr-5 text-sm mt-3 line-clamp-6">{project.description}</p>
            <p className="text-sm text-gray-500 mt-5">{project.technologies}</p>
            <a
              className="text-sm text-blue-400 hover:text-blue-600 max-w-fit"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
