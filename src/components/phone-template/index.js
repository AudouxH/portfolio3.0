import React from "react";
import './index.css';

const PhoneTemplate = ({ title, image }) => {
    return (
        <div className="phone-template">
            <img src={image} className="phone-img" alt={title}/>
        </div>
    );
}

export default PhoneTemplate;