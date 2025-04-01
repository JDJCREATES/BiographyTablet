import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/componentStyles/quickIcon.module.css';

const QuickIcon = ( {icon, title, path}) => {

    return (
        <div className={styles.iconContainer}>
            <Link to={path} className={styles.link}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.appTitle}>
                    {title}
                </div>
            </Link>
        </div>
    );
};

export default QuickIcon;