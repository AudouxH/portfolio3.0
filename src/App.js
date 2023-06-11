import { useRef } from "react";
import './App.css';

// screens
import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import NavigationBar from "./components/navigation-bar";
import GithubScreen from "./screens/github";
import TimelineScreen from "./screens/timeline";
import ProjectsScreen from "./screens/projects";
import Footer from "./components/footer";

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const githubRef = useRef(null);
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <NavigationBar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        githubRef={githubRef}
        timeLineRef={timelineRef}
        projectsRef={projectsRef} />

      <HomeScreen
        homeRef={homeRef}
        aboutMeRef={aboutMeRef} />

      <AboutScreen
        aboutMeRef={aboutMeRef} />

      <GithubScreen
        githubRef={githubRef} />

      <TimelineScreen
        timelineRef={timelineRef} />

      <ProjectsScreen
        projectsRef={projectsRef} />

      <Footer />
    </div>
  );
}

export default App;
