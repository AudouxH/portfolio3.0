import React from "react";

import Profile from "../components/profile_picture";
import Description from "../components/description";
import Button from "../components/button";
import Title from "../components/title";

import '../assets/styles/home.css';

const HomeScreen = ({ homeRef, aboutMeRef }) => {
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();

    return (
        <div className="homeScreen" ref={homeRef}>
            <Profile />
            <div className="side_info">
                <Title
                    text={"Hi there, my name is Hugo Audoux !"}
                    isColored />
                <Description
                    text={["I'm a web and mobile front-end developer based", "in Lyon, France."]}
                    isColored
                    isTextTab/>
                <div className="button_right">
                    <Button text={"Discover"} onClick={scrollToAbout} />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
