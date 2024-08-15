import React from "react";
import projects from "../projects";

export default function ProjectItem() {
  return (
    <div className="flex flex-col gap-5 mt-6 ">
      {projects.map((project, id) => (
        <div
          className="shadow-md flex flex-raw rounded-xl max-w-6xl hover:scale-105 hover:bg-white mx-auto transition-transform"
          key={id}
        >
          <div className="rounded-lg">
            <img
              className="max-w-80 max-h-80 m-5 rounded-lg"
              src={project.image}
              alt="Project_image"
            />
          </div>
          <div className="flex flex-col text-left  p-5 font-poppins">
            <h2 className="text-2xl  font-semibold">{project.name}</h2>
            <p className="text-justify pr-5 text-sm mt-3 line-clamp-6">
              {project.description}
            </p>
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
