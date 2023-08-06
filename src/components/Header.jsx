import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="  flex justify-between border shadow py-3 px-10">
      <p className=" text-3xl font-serif -my-1 text-green-700">B.0</p>
      <ul className="flex gap-16 mx-20">
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
      <Button>Contact Me</Button>
    </div>
  );
};

export default Header;
