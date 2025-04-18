import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/componentStyles/quickIcon.module.css';

const QuickIcon = (props) => {

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

export default QuickIcon;