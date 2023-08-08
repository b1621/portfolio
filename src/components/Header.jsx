import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" fixed bg-white opacity-80 top-0 z-30 w-full  flex justify-between border shadow py-3 px-10">
      <a href="#home">
        <p className=" text-3xl font-serif -my-1 text-green-700">B.0</p>
      </a>
      <ul className="flex gap-16 mx-20">
        <a href="#aboutme">
          <li>About Me</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contactme">
          <li>Contact Me</li>
        </a>
      </ul>
      <Button>Hire Me</Button>
    </div>
  );
};

export default Header;
