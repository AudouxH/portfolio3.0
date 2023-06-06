import React, { useState, useEffect } from "react";
import './index.css';
import Button from "../button";

const NavigationBar = ({ homeRef, aboutMeRef, timeLineRef, workRef, githubRef }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [onScroll, setOnScroll] = useState(false);
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();
    const scrollToTimeLine = () => timeLineRef.current.scrollIntoView();
    const scrollToWorks = () => workRef.current.scrollIntoView();
    const scrollToHome = () => homeRef.current.scrollIntoView();
    const scrollToGithub = () => githubRef.current.scrollIntoView();

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
        <div className={onScroll ? "navigation-bar add-shadow" : "navigation-bar no-shadow"}>
            <div className='Title'>
                <button className="btnTitle" onClick={() => scrollToHome()}>Audouxh</button>
            </div>
            <div className='Buttons'>
                <Button text={'About me'} onClick={scrollToAbout} reverse/>
                <Button text={'Github'} onClick={scrollToGithub} reverse/>
                <Button text={'Experience'} onClick={scrollToTimeLine} reverse/>
                <Button text={'Projects'} onClick={scrollToWorks} reverse/>
            </div>
        </div>
    );
}

export default NavigationBar;
