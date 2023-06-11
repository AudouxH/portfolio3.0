import React from 'react';
import './index.css';

const Title = ({ text, isColored, isWhite }) => {
    return (
        <p
            className='title_component'
            style={isColored ? { color: '#141099' } : isWhite ? { color: '#FFF' } : { color: '#000' }}
        >
            {text}
        </p>
    );
}

export default Title;