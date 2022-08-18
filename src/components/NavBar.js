import { useEffect, useState } from "react";
import '../styles/NavBar.css'

const NavBar = ({ aboutMeRef, timeLineRef, workRef, topRef, setShowContact }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [onScroll, setOnScroll] = useState(false);
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();
    const scrollToTimeLine = () => timeLineRef.current.scrollIntoView();
    const scrollToWork = () => workRef.current.scrollIntoView();
    const scrollToTop = () => topRef.current.scrollIntoView();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        scrollPosition > 0 ? setOnScroll(true) : setOnScroll(false);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <div className={onScroll ? "NavBar add-shadow" : "NavBar no-shadow"}>
            <div className='Title'>
                <button className="btnTitle" onClick={() => scrollToTop()}>Audoux Hugo</button>
            </div>
            <div className='Buttons'>
                <button className="button" onClick={() => scrollToAbout()}>
                    <p>About me</p>
                </button>
                <button className="button" onClick={() => scrollToTimeLine()}>
                    <p>Experience</p>
                </button>
                <button className="button" onClick={() => scrollToWork()}>
                    <p>Projet</p>
                </button>
                <button className="button" onClick={() => setShowContact(true)}>
                    <p>Contact</p>
                </button>
            </div>
        </div>
    );
}

export default NavBar;