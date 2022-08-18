import '../styles/CenteredElement.css'

const Centered = ({ topRef, aboutMeRef }) => {
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();

    return (
        <div className="Centered" ref={topRef}>
            <div className='Container'>
                <p>Bienvenue sur mon portfolio</p>
                <p>Developpeur</p>
                <p>x</p>
                <p>Streamer</p>
                <p>Retrouver toutes les informations que vous avez<br />besoin sur moi juste en dessous</p>
                <button className="knowMore" onClick={() => scrollToAbout()}>
                    <p className='knowMoreText'>En savoir plus</p>
                </button>
            </div>
        </div>
    );
}

export default Centered;