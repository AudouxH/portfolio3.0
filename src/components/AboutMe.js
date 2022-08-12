import '../styles/AboutMe.css'
import images from '../assets/sources/images';
import myCV from '../assets/sources/AudouxHugo.pdf';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <div className="aboutme" ref={aboutMeRef}>
            <div className='container-left'>
                <div className='first-sentence'>
                    <p>Bienvenue &nbsp;</p>
                    <img src={images[1]} alt='hand' className='hand' />
                    <p>&nbsp;, je m'appelle Hugo Audoux</p>
                </div>
                <p>Je suis developpeur web et mobile spécialiser dans le<br />
                    framework React (js et native) ainsi que le web3 pour<br />
                    offrir la meilleur experience utilisateur et qui aime partagé<br />
                    c’est idées et sa passion sur twitch car comme le dit si<br />
                    bien joseph Joubert, “Enseigner c’est apprendre deux fois”.</p>
                <div className='container-icons'>
                    <a href='https://github.com/AudouxH' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[4]} alt='' className='icon' />
                    </a>
                    <a href='https://www.malt.fr/profile/hugoaudoux' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[6]} alt='' className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/hugo-audoux' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[3]} alt='' className='icon' />
                    </a>
                    <a href='https://www.twitch.tv/audouxh' rel="noopener noreferrer" target="_blank" className='link-icon'>
                        <img src={images[5]} alt='' className='icon' />
                    </a>
                    <a href={myCV} className='link-icon'>
                        <img src={images[2]} alt='' className='icon' />
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