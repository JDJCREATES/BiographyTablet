import React from 'react';
import styles from '../styles/tabletscreen.module.css';
import { Link } from 'react-router-dom';


{/*
    -Created a children prop for the actual tablet content,
    -TabletScreen is the container for the app content
    -tablethome will hold app icons & Link to the relevant page 
*/}
const TabletScreen = ({ children }) => {
    const handleHomeClick = () => {

    };

    return (
      <div className={styles.maindiv}>
        <div className={styles.outershell}>

          <div className={styles.innershell}>
            <div className={styles.screen}>
              {children}
            </div>
          </div>

            <div className={styles.homeButtonContainer}>
                    <Link to="/" className={styles.homeLink}>
                        <button id="homeButton" onClick={handleHomeClick} className={styles.homeButton}></button> 
                    </Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default TabletScreen;
  