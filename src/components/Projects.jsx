import React from "react";

const Projects = () => {
  return (
    <div className=" h-screen border border-gray-600">
      <div className="py-20">
        <h2 className="text-center text-4xl mb-10">My Works</h2>
        <ul className=" w-fit mx-auto flex gap-14 my-5">
          <li>All</li>
          <li>Web Development</li>
          <li>Tools</li>
        </ul>
        <div className=" w-2/3 mx-auto flex gap-10">
          <div className="border p-5 w-60  h-56">
            <p> project 1</p>
          </div>
          <div className="border p-5 w-60 h-56">
            <p> project 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
