import './App.css';
import AboutMe from './components/AboutMe';
import Centered from './components/CenteredElement';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Passion from './components/Passion';
import ResumeNumber from './components/ResumeNumber';
import TimeLine from './components/TimeLine';
import Works from './components/Works';
import Contact from './components/Contact';
import { useRef, useState } from "react";

function App() {
  const aboutMeRef = useRef(null);
  const timeLineRef = useRef(null);
  const workRef = useRef(null);
  const topRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={showContact ? "App" : "App noScroll"}>
      <Contact isShow={showContact}
      setShowContact={setShowContact}></Contact>
      <NavBar
      aboutMeRef={aboutMeRef}
      workRef={workRef}
      timeLineRef={timeLineRef}
      topRef={topRef}
      setShowContact={setShowContact}></NavBar>
      <Centered topRef={topRef} aboutMeRef={aboutMeRef}></Centered>
      <AboutMe aboutMeRef={aboutMeRef}></AboutMe>
      <ResumeNumber></ResumeNumber>
      <TimeLine timeLineRef={timeLineRef}></TimeLine>
      <Works workRef={workRef}></Works>
      <Passion></Passion>
      <Footer></Footer>
    </div>
  );
}

export default App;
