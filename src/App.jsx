import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div div className="relative">
      <Header />
      <HomeScreen />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
