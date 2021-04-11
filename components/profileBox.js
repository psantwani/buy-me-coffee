import React from 'react';

import '../styles/profile.scss';
import profileData from '../data.json'
import {getIcon} from '../config/function'


const ProfileBox = () => {
    return (
        <div className="profile">
            <div className="profile-head">
                <div className="profile-photo">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFEuU4nwFvVaw/profile-displayphoto-shrink_400_400/0/1612769629475?e=1623888000&v=beta&t=N-g-Ekr60mCWME3OEK8Pqzr5vpyzzkZCYUFBzhCFg6Q" alt="" />
                </div>
                <h2>{profileData.name}</h2>
                <small>{profileData.subtitle}</small>
                <p>
                    {profileData.about}
                </p>

                <ul>
                    {profileData.links.map((profile, key) => (
                        <li key={key}>
                            <a href={profile.link} target="_blank" rel="noopener norerferrer">
                                {getIcon(profile.type)}
                                <span>{profile.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileBox;
