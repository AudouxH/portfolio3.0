import '../constants/styles/Works.css'
import Vaulth from '../assets/sources/Vaulth-Screenshot.png';
import Quak from '../assets/sources/Quak-Screenshot.png';
import NfcManager from '../assets/sources/NFC-Manager-screenshot.png';

const Works = ({ workRef }) => {

    const Work = ({ source, title, description, tags, link }) => {
        return (
            <div className='container-work'>
                <img src={source} alt="work" className='image-work' />
                <div className='container-description'>
                    <p className='title-description'>{title}</p>
                    <p className='description'>{description}</p>
                    <div className='other-container'>
                        <a className='github-link' href={link} rel="noopener noreferrer" target="_blank">View on github</a>
                        <div className='container-tag'>
                            <p className='tag'>Tags:</p>
                            {
                                tags.map((tag, index) =>
                                    <p key={index} className="tag">{tag}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='Works' ref={workRef}>
            <p className='title'>Projects</p>

            <Work source={Vaulth}
                title="Vaulth" description="
                Vaulth is a web and mobile solution to certify physical artwork. Thanks to ethereum blockchain,
                Vaulth aims is to dematerialize artwork certify by creating digital one and find solution to apply
                it directly on the artwork."
                tags={["React JS", "React Native", "Web 3"]} link='https://github.com/Vaulth?view_as=public'></Work>

            <Work source={Quak}
                title="Quak" description="Quak is a 3D virtual duck feeding game made on unity.
                The goal of the game is just chilling close to a lake and feed duck with hotdog or corn.
                But be careful, duck can explode if you feed them only with hotdog !"
                tags={["Hackaton 2023", "Unity", "Augmented Reality"]} link='https://github.com/FastNEasy/DuckFeedingSimulator'></Work>
            
            <Work source={NfcManager}
                title="NFC Manager" description="Currently on a NFC Manager project to understand how NFC Tags work and trying to put password security on it.
                This acheivement will able me to create a secure tag certification for real artworks.
                It will be implement on our years end project Vaulth."
                tags={["React Native", "Near field communication",]} link='https://github.com/AudouxH/soundbox4stream'></Work>
            
        </div>
    );
}

export default Works;