import React from "react";
import './index.css';

const LaptopTemplate = ({ title, image }) => {
    return (
        <div className="laptop-template">
            <img src={image} className="laptop-img" alt={title}/>
        </div>
    );
}

export default LaptopTemplate;