import React from 'react';
import styles from '../styles/componentStyles/appIcon.module.css';

const AppIcon = ( props) => {

    return (
        <div className={styles.iconContainer}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.appTitle}>
                {props.title}
            </div>
        </div>
    );
};

export default AppIcon;