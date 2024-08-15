import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed bg-white w-full shadow-md z-50">
      <ul className="flex flex-wrap justify-end gap-7 p-5 max-w-7xl m-auto font-raleway">
        <Link to="/">
          <li className="uppercase text-gray-400 text-sm sm:text-lg hover:text-black cursor-pointer">
            Home
          </li>
        </Link>
        {/* <a href="#about_me" className="uppercase text-gray-400 text-sm sm:text-lg hover:text-black cursor-pointer">
          About
        </a> */}
        <Link to="/projects">
          <li className="uppercase text-gray-400 text-sm sm:text-lg hover:text-black cursor-pointer">
            Projects
          </li>
        </Link>
        <li className="uppercase text-gray-400 text-sm sm:text-lg hover:text-black cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
