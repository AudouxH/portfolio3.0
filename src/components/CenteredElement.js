import '../constants/styles/CenteredElement.css'

const Centered = ({ topRef, aboutMeRef }) => {
    const scrollToAbout = () => aboutMeRef.current.scrollIntoView();

    return (
        <div className="Centered" ref={topRef}>
            <div className='Container'>
                <p>Welcome on my personal website</p>
                <p>front-end web/mobile</p>
                <p>and</p>
                <p>web 3 developer</p>
                <p>Get every information you need about me<br />just bellow</p>
                <button className="knowMore" onClick={() => scrollToAbout()}>
                    <p className='knowMoreText'>I want to know more !</p>
                </button>
            </div>
        </div>
    );
}

export default Centered;