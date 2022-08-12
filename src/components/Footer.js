import '../styles/Footer.css'
import images from '../assets/sources/images';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='endLine'></div>
            <div className='links'>
                {/* <a>
                    <img src={images[4]} alt='' className='link' />
                </a>
                <a>
                    <img src={images[6]} alt='' className='link' />
                </a>
                <a>
                    <img src={images[3]} alt='' className='link' />
                </a> */}
                <a href='https://github.com/AudouxH' rel="noopener noreferrer" target="_blank">
                    <img src={images[4]} alt='' className='link' />
                </a>
                <a href='https://www.malt.fr/profile/hugoaudoux' rel="noopener noreferrer" target="_blank">
                    <img src={images[6]} alt='' className='link' />
                </a>
                <a href='https://www.linkedin.com/in/hugo-audoux' rel="noopener noreferrer" target="_blank">
                    <img src={images[3]} alt='' className='link' />
                </a>
            </div>
            <div className='allRight'>
                <p>2022 - Hugo Audoux - All right reserve</p>
            </div>
        </div>
    );
}

export default Footer;