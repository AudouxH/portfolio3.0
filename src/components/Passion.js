import '../styles/Passion.css'
import passions from '../assets/gifs/gifs';

const Passion = () => {
    return (
        <div className='passions'>
            <div className='passionTitle'>
                <p>Je suis passionĂ© par</p>
            </div>
            <div className="passionList">
                {
                    passions.map((passion, index) =>
                        <div className='passion' key={index}>
                            <img src={passion[0]} alt='passion'/>
                            <p>{passion[1]}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Passion;