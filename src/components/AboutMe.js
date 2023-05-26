import '../constants/styles/AboutMe.css'
import images from '../assets/sources/images';
import myCV from '../assets/sources/AudouxHugo.pdf';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <div className="aboutme" ref={aboutMeRef}>
            <div className='container-left'>
                <div className='first-sentence'>
                    <p>Welcome &nbsp;</p>
                    <img src={images[1]} alt='hand' className='hand' />
                    <p>&nbsp;, I'm Hugo Audoux</p>
                </div>
                <p>I'm a front-end web and mobile developer focus on the framework React (JS and Native).<br/>
                    Currently on a NFC Manager project I'm trying to put password security on it.<br/>
                    I'm also interest about web3 that i discovered thanks to Vaulth.
                </p>
                <div className='container-icons'>
                    <a href={myCV} className='link-icon'>
                        <img src={images[2]} alt='' className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/hugo-audoux' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[5]} alt='' className='icon' />
                    </a>
                    <a href='https://github.com/AudouxH' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[4]} alt='' className='icon' />
                    </a>
                    <a href='https://www.malt.fr/profile/hugoaudoux' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[6]} alt='' className='icon' />
                    </a>
                </div>
            </div>
            <div className='container-rigth'>
                <img className='image' src={images[0]} alt='Hugo Audoux' />
            </div>
        </div>
    );
}

export default AboutMe;