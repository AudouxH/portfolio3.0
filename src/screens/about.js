import React from "react";

import Description from "../components/description";
import FlipCard from '../components/flip-card';
import Title from "../components/title";

import '../assets/styles/screens/about.css';

const AboutScreen = ({ aboutMeRef }) => {
    return (
        <div className="aboutScreen" ref={aboutMeRef}>
            <Title text={"About Me"} isWhite />
            <div className="information">
                <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                    <Description
                        text={[
                            "Born at Lyon 23 years ago, I started to code thanks to my uncle who gave me a Raspberry pi 3 for my birthday. My first project was to create a personal assistant like Jarvis into Iron Man movie and over time, I ended up to be a problem solving and inovative enthusiast !",
                            "",
                            "I realized that programming was for me the best way to give birth to the ideas i had. Because of the particular approach of Epitech about education, i decided to learn in this school to get a Master degree. But more than just a degree, i learned how to solve many kind of problem by the self learning, which is for me the best things i was looking for into a school.",
                            "",
                            "Currently trying to create a NFC Manager and a crypto wallet connection with the React Native framework, to learn more about these technology. This acheivements will able me to create a secure NFC Tag certification for physical artworks. These will be implement on our Epitech Inovative Project Vaulth."
                        ]}
                        isWhite
                        isTextTab />
                </div>
                <FlipCard />
            </div>
            <Title text={"I really like"} isWhite/>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", width: '90%'}}>
                <Description text={[
                    "The backpack lifestyle",
                    "Practice slackline",
                    "Drink caputchino and smoothie",
                    "Reading books"
                ]} isWhite isTextTab />
            </div>
        </div>
    );
}

export default AboutScreen;