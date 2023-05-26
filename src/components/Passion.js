import '../constants/styles/Passion.css'
import passions from '../assets/gifs/gifs';

const Passion = () => {
    return (
        <div className='passions'>
            <div className='passionTitle'>
                <p>I'm enthusiast in</p>
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