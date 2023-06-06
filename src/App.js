import { useRef } from "react";
import './App.css';

// screens
import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import NavigationBar from "./components/navigation-bar";

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const githubRef = useRef(null);
  const timeLineRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <NavigationBar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        githubRef={githubRef}
        timeLineRef={timeLineRef}
        projectsRef={projectsRef}/>

      <HomeScreen
        homeRef={homeRef}
        aboutMeRef={aboutMeRef} />

      <AboutScreen
        aboutMeRef={aboutMeRef}/>

    </div>
  );
}

export default App;
