import AboutMe from "./components/AboutMe";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <>
      <div className="absolute w-screen bg-gray-100 min-h-screen">
        <HomeScreen />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
