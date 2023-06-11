import React from "react";

import PhoneTemplate from '../components/phone-template';
import LaptopTemplate from '../components/laptop-template';

import images from "../assets/sources/images";
import '../assets/styles/projects.css';

const ProjectsScreen = ({ projectsRef }) => {
    return (
        <div className="projectsScreen" ref={projectsRef}>
            <PhoneTemplate title={"wallet connect"} image={images.walletConnection} />
            <LaptopTemplate title={"vaulth"} image={images.vaulth} />
        </div>
    );
}

export default ProjectsScreen;
