import React from 'react';
import styles from '../styles/componentStyles/socialLinks.module.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialLinks = () => {
    const icons = {
        facebook: {
            name: "Facebook",
            icon: <FacebookIcon />,
            url: "https://www.facebook.com/jacob.jones.96155669/",
            
        }
    };
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                
            </div>
        </div>
    );
};

export default SocialLinks;