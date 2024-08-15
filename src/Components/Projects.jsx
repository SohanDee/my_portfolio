import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="text-black max-w-6xl text-center pt-16 flex flex-col gap-6 mx-auto">
      <h2 className="font-bavista text-7xl mb-8">Projects</h2>
      <ProjectItem />
      <Link to="/projects">
        <p className="text-gray-400 hover:text-black pt-6 mx-auto max-w-fit font-poppins">
          - View more -
        </p>
      </Link>
    </div>
  );
}
