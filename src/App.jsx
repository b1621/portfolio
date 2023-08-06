import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className=" ">
        <Header />
        <HomeScreen />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
