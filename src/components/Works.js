import '../styles/Works.css'
import weatherySearch from '../assets/sources/Screenshot(1).png'
import SoundBox from '../assets/sources/Screenshot.png'
import Vaulth from '../assets/sources/Vaulth.png'

const Works = ({ workRef }) => {

    const Work = ({ source, title, description, tags, link }) => {
        return (
            <div className='container-work'>
                <img src={source} alt="work" className='image-work' />
                <div className='container-description'>
                    <p className='title'>{title}</p>
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
            <Work source={weatherySearch}
                title="Weathery" description="Weathery est un assistant personnel de météo,
            Entrez la ville dont vous voulez savoir le temps et weathery vous donne l'estimation
            de la semaine et plus d'information sur la pression, le vent, le lever et coucher de soleil."
                tags={["React JS", "Web", "API"]} link='https://github.com/AudouxH/soleil-app'></Work>
            <Work source={SoundBox}
                title="Stream sound box" description="Stream sound box est une sound box en ligne qui permet
                a tous les streamers d'ouvrir une page web pour animé au mieux leur live."
                tags={["React JS", "Web", "Sound"]} link='https://github.com/AudouxH/soundbox4stream'></Work>
            <Work source={Vaulth}
                title="Vaulth" description="Vaulth est une solution web et mobile d'authentification de l'art,
                grace a la blockchain etherium, Vaulth a pour but de dematerialiser les certificats
                d'authentification, elle facilite et securise vos achat d'oeuvre d'art. "
                tags={["React JS", "React Native", "Web 3"]} link='https://github.com/Vaulth?view_as=public'></Work>
        </div>
    );
}

export default Works;