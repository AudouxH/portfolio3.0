import '../constants/styles/AboutMe.css'
import images from '../assets/sources/images';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <div className="aboutme" ref={aboutMeRef}>
            <p className='title'>About Me</p>
            <div className='about-section'>
                <div className='container-left'>
                    <p>
                        Born at Lyon 23 years ago, I started to code thanks to my uncle who gave me a Raspberry pi 3 for my birthday.<br/>
                        My first project was to create a personal assistant like Jarvis into Iron Man movie and
                        over time, I ended up to be a problem solving and inovative enthusiast !<br /><br/>
                        I realized that programming was for me the best way to give birth to the ideas i had.
                        Because of the particular approach of Epitech about education, i decided to learn in this school to get a Master degree.
                        But more than just a degree, i learned how to solve many kind of problem by the self learning, which is for me the best things i was looking for into a school.<br/><br/>
                        Currently trying to create a NFC Manager and a crypto wallet connection with the React Native framework, to learn more about these technology.
                        This acheivements will able me to create a secure NFC Tag certification for physical artworks. These will be implement on our Epitech Inovative Project Vaulth.
                    </p>
                </div>
                <div className='container-right'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={images[8]} alt="Raspberry Pi 3" className='image'/>
                            </div>
                            <div class="flip-card-back">
                                <img src={images[7]} alt="Epitech logo" className='image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;