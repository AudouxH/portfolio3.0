import './App.css';
import AboutMe from './components/AboutMe';
import Centered from './components/CenteredElement';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Passion from './components/Passion';
import ResumeNumber from './components/ResumeNumber';
import TimeLine from './components/TimeLine';
import Works from './components/Works';
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef(null);
  const timeLineRef = useRef(null);
  const workRef = useRef(null);
  const topRef = useRef(null);

  return (
    <div className="App">

      <NavBar
        aboutMeRef={aboutMeRef}
        workRef={workRef}
        timeLineRef={timeLineRef}
        topRef={topRef}>
      </NavBar>

      <Centered
        topRef={topRef}
        aboutMeRef={aboutMeRef}>
      </Centered>

      <AboutMe
        aboutMeRef={aboutMeRef}>
      </AboutMe>

      <ResumeNumber>
      </ResumeNumber>

      <TimeLine
        timeLineRef={timeLineRef}>

      </TimeLine>

      <Works
        workRef={workRef}>
      </Works>

      <Passion>
      </Passion>

      <Footer>
      </Footer>

    </div>
  );
}

export default App;
