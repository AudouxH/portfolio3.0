import React from "react";
import images from "../assets/sources/images";
import '../constants/styles/HomeScreen.css';

const HomeScreen = ({ topRef, aboutMeRef }) => {
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();

    return (
        <div className="homescreen" ref={topRef}>
            <img src={images[9]} alt="background" className="background" />
            <img src={images[0]} alt="profile of hugo audoux" className="profile_picture" />
            <div className="side_info">
                <div>
                    <p className="title">Hi there, my name is Hugo Audoux !</p>
                    <p className="description">I'm a web and mobile front-end developer based in<br/> Lyon, France.</p>
                </div>
                <div className="explore_section">
                    <button className="explore_button" onClick={scrollToAbout}>
                        <p className="explore_text">Discover</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;