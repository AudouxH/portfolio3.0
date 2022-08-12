import '../styles/CenteredElement.css'

const Centered = ({ topRef }) => {
    return (
        <div className="Centered" ref={topRef}>
            <div className='Container'>
                <p>Bienvenue sur mon portfolio</p>
                <p>Developpeur</p>
                <p>x</p>
                <p>Streamer</p>
                <p>Retrouver toutes les informations que vous avez<br />besoin sur moi juste en dessous</p>
                <p>En savoir plus</p>
            </div>
        </div>
    );
}

export default Centered;