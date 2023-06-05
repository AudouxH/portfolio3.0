import { useRef } from "react";

import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TimeLine from './components/TimeLine';
import Works from './components/Works';
import Github from './components/Github';

import HomeScreen from './components/HomeScreen';

import './App.css';

function App() {
  const aboutMeRef = useRef(null);
  const timeLineRef = useRef(null);
  const workRef = useRef(null);
  const topRef = useRef(null);
  const githubRef = useRef(null);

  return (
    <div className="App">

      <NavBar
        aboutMeRef={aboutMeRef}
        workRef={workRef}
        timeLineRef={timeLineRef}
        topRef={topRef}
        githubRef={githubRef}>
      </NavBar>

      <HomeScreen
        topRef={topRef}
        aboutMeRef={aboutMeRef}>
      </HomeScreen>

      <AboutMe
        aboutMeRef={aboutMeRef}>
      </AboutMe>

      <Github
        githubRef={githubRef}>
      </Github>

      <TimeLine
        timeLineRef={timeLineRef}>
      </TimeLine>

      <Works
        workRef={workRef}>
      </Works>

      <Footer>
      </Footer>

    </div>
  );
}

export default App;
