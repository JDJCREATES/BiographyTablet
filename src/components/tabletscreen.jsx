import React from 'react';
import styles from '../styles/tabletscreen.module.css';
import { Link } from 'react-router-dom';

import QuickPanel from './quickPanel';

/* Call To Action button Icons */
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const TabletScreen = ({ children }) => {
    const handleHomeClick = () => {
        // Home button functionality
    };

    const handleBackClick = () => {
        window.history.back();
    }

    return (
      <div className={styles.maindiv}>
        <div className={styles.outershell}>
          <div className={styles.innershell}>
            <div className={styles.screen} style={{ position: 'relative', overflow: 'hidden' }}>
              <QuickPanel />
              <div style={{ height: '100%', position: 'relative', zIndex: 1 }}>
                {children}
              </div>
              <div className={styles.actionContainer}>
                <div className={styles.backButtonContainer}>
                    <button className={styles.backButton} onClick={handleBackClick}> 
                        <ChevronLeftRoundedIcon />
                    </button>
                    <button className={styles.appsButton}>
                        <PanoramaFishEyeIcon />
                    </button>
                </div>
            </div>
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
