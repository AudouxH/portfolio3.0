import React from 'react';
import './index.css';
import images from '../../assets/sources/images';

const Profile = () => {
    return (
        <div className='profile_component'>
            <img src={images.profilePicture} alt='Hugo Audoux' className='profile_img'/>
        </div>
    );
}

export default Profile;