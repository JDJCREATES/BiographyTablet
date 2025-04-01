import React from 'react';
import styles from '../styles/componentStyles/appIcon.module.css';

const AppIcon = ( {icon, title}) => {

    return (
        <div className={styles.iconContainer}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.appTitle}>
                {title}
            </div>
        </div>
    );
};

export default AppIcon;