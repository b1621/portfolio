import React from "react";
import Button from "./Button";

const Header = () => {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="  opacity-80 top-0 z-30 w-full  flex justify-between shadow py-3 px-10">
      <a href="#home">
        {/* <p className=" text-3xl font-serif -my-1 text-green-700">B.0</p> */}
      </a>
      <ul className="hidden md:flex lg:gap-10 gap-16 mx-20">
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <div className=" hidden md:block ">
        <Button>Hire Me</Button>
      </div>
      <div className="md:hidden block">
        <p>menu</p>
      </div>
    </div>
  );
};

export default Header;
