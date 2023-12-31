import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SideBar from "./components/SideBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      // Customize AOS settings here
      duration: 2000,
      offset: 200,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div div className="relative bg bg-gray-950 text-white">
      <ToastContainer />
      <SideBar />
      <div className="border-slate-950 h-1 border "></div>
      {/* <Header /> */}
      <HomeScreen />
      <AboutMe id="about" />
      <Skills id={"skills"} />
      <Projects id={"projects"} />
      <Contact id={"contact"} />
    </div>
  );
}

export default App;
