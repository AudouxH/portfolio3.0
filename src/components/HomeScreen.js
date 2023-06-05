import React from "react";
import profile_picture from '../assets/sources/hugoAudoux.jpg';
import '../constants/styles/HomeScreen.css';

const HomeScreen = ({ topRef, aboutMeRef }) => {
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();

    return (
        <div className="homescreen" ref={topRef}>
            <img src={profile_picture} alt="profile of hugo audoux" className="profile_picture" />
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