import React, { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  // Function to handle scroll events
  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY;
    // console.log("scrolly Y = ", scrollY);

    // Define the positions of your sections
    const homePosition = 0;
    const aboutPosition = document.getElementById("about").offsetTop;
    const skillsPosition = document.getElementById("skills").offsetTop;
    const projectsPosition = document.getElementById("projects").offsetTop;
    const contactPosition = document.getElementById("contact").offsetTop;

    // Determine which section is currently in view
    if (scrollY >= homePosition && scrollY < aboutPosition) {
      setActiveLink("home");
    } else if (scrollY >= aboutPosition && scrollY < skillsPosition) {
      setActiveLink("about");
    } else if (scrollY >= skillsPosition && scrollY < projectsPosition) {
      setActiveLink("skills");
    } else if (scrollY >= projectsPosition && scrollY < contactPosition) {
      setActiveLink("projects");
    } else if (scrollY >= contactPosition) {
      setActiveLink("contact");
    } else {
      setActiveLink("about");
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // console.log("the current page is ", activeLink);

  // const scrollToAbout = () => {
  //   scroller.scrollTo("about", {
  //     duration: 1000,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };
  // const scrollToProject = () => {
  //   scroller.scrollTo("projects", {
  //     duration: 1000,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };
  const [theme, setTheme] = useState(localStorage.theme);
  const toggleDarkMode = () => {
    console.log("hello world");
    console.log("theme", theme);
    console.log(localStorage);
  };

  // https://www.devwares.com/blog/how-to-implement-dark-mode-in-tailwind-css/

  return (
    <div className="fixed w-32   h-full">
      {/* bg-gray-900*/}
      <img
        onClick={scrollToTop}
        className=" cursor-pointer h-14 mt-4 w-20 shadow-2xl  rounded-full  shadow-green-700 mx-auto"
        src="logo-no-background.png"
        alt=""
      />
      <ul className="flex flex-col justify-center h-full px-4 gap-4">
        <button onClick={toggleDarkMode}>click</button>
        <Link
          className={` cursor-pointer hover:text-green-800 ${
            activeLink === "about" ? "text-green-700" : ""
          }`}
          to="about"
          smooth={true}
          duration={1500}
        >
          <span className={activeLink === "about" ? " inline px-1" : "hidden"}>
            {"-->"}
          </span>
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1500}
          className={` cursor-pointer hover:text-green-800 ${
            activeLink === "skills" ? "text-green-700" : ""
          }`}
        >
          <span className={activeLink === "skills" ? " inline px-1" : "hidden"}>
            {"-->"}
          </span>
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1500}
          className={` cursor-pointer hover:text-green-800 ${
            activeLink === "projects" ? "text-green-700" : ""
          }`}
        >
          <span
            className={activeLink === "projects" ? " inline px-1" : "hidden"}
          >
            {"-->"}
          </span>
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1500}
          className={` cursor-pointer hover:text-green-800 ${
            activeLink === "contact" ? "text-green-700" : ""
          }`}
        >
          <span
            className={activeLink === "contact" ? " inline px-1" : "hidden"}
          >
            {"-->"}
          </span>
          Contact
        </Link>
        <div className="border flex space-x-5 my-5">
          <img className="h-7" src="github.png" alt="" />
          <img className="h-7" src="linkedin (1).png" alt="" />
        </div>
        {/* <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects" onClick={scrollToProject}>
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a> */}
        {/* <button onClick={scrollToTop}>Scroll to Top</button> */}
        <div className=" h-48">
          {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
          {/* <FontAwesomeIcon icon={faGithub} /> */}
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
