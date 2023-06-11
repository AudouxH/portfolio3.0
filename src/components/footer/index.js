import React from 'react';
import './index.css';
import images from '../../assets/sources/images';

const Footer = () => {
    return (
        <div className='footer-component'>
            <div className='links'>
                <a href='https://www.linkedin.com/in/hugo-audoux/' rel="noopener noreferrer" target="_blank">
                    <img src={images.linkedin} alt='' className='link' />
                </a>
                <a href='https://github.com/AudouxH' rel="noopener noreferrer" target="_blank">
                    <img src={images.github} alt='' className='link' />
                </a>
                <a href='https://www.malt.fr/profile/hugoaudoux' rel="noopener noreferrer" target="_blank">
                    <img src={images.malt} alt='' className='link' />
                </a>
            </div>
            <div className='allRight'>
                <p>2023 - Hugo Audoux - All right reserve</p>
            </div>
        </div>
    );
}

export default Footer;