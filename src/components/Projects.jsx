import React from "react";

const Projects = ({ id }) => {
  return (
    <div id={id} className=" h-screen border border-white">
      <div className="py-20">
        <h2 className="text-center text-4xl mb-10">My Works</h2>
        <ul className=" w-fit mx-auto flex gap-14 my-5">
          <li>All</li>
          <li>Web Development</li>
          <li>Tools</li>
        </ul>
        <div className=" w-2/3 mx-auto flex gap-10">
          <div data-aos="flip-left" className="border p-5 w-60  h-56">
            <p> project 1</p>
          </div>
          <div data-aos="flip-left" className="border p-5 w-60 h-56">
            <p> project 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
