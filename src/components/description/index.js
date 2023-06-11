import React from 'react';
import './index.css';

const Description = ({ text, isTextTab, isColored, isWhite }) => {
    return (
        isTextTab ?
            text.map((text, index) => {
                return (
                    <p
                        key={index}
                        className="description_component"
                        style={isColored ? { color: '#141099' } : isWhite ? { color: '#FFF' } : { color: '#000' }}
                    >
                        <>{text}</>
                        <br />
                    </p>
                )
            }) :
            <p className="description_component"
                style={isColored ? { color: '#141099' } : isWhite ? { color: '#FFF' } : { color: '#000' }}>
                {text}
            </p>
    );
}

export default Description;