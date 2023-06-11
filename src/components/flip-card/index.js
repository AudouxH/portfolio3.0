import React from "react";
import './index.css';

import images from "../../assets/sources/images";

const FlipCard = () => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={images.Raspberry} alt="Raspberry Pi 3" className='flip-card-img' />
                </div>
                <div className="flip-card-back">
                    <img src={images.Epitech} alt="Epitech logo" className='flip-card-img' />
                </div>
            </div>
        </div>
    );
}

export default FlipCard;