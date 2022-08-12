import '../styles/Contact.css'
import close from '../assets/sources/close.png'

const Contact = ({ isShow, setShowContact }) => {
    return (
        <div className={isShow ? "contact-container" : "contact-container hide"}>
            <div className='contact-modal'>
                <div className='close-container'>
                    <button onClick={() => setShowContact(false)}
                        className="btnClose"><img src={close} alt='close' /></button>
                </div>
                <p className='titleContact'>Contactez moi</p>
                <div className='formContact'>
                    <input className='inputEmail' placeholder='Email'></input>
                    <textarea className='inputMessage' placeholder='Message'></textarea>
                    <button className='btnSend'>Envoyer</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;