import React from 'react';
import './index.css';

const Button = ({ text, onClick, reverse }) => {
    return (
        <button className={[reverse ? "button_component_reverse" : 'button_component']} onClick={onClick}>
            <p className={"button_text"}>{text}</p>
        </button>
    );
}

export default Button;