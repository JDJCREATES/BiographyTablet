import React from 'react';
import styles from '../styles/tablethome.module.css';
import { Link } from 'react-router-dom';


// Holds Icons and provides Links to relevant pages

// Custom Components
import AppIcon from '../components/appIcon.jsx';

// Icons for pulldown/quick access menu 
import Battery60RoundedIcon from '@mui/icons-material/Battery60Rounded';
import BluetoothConnectedRoundedIcon from '@mui/icons-material/BluetoothConnectedRounded';
import SignalCellularNodataRoundedIcon from '@mui/icons-material/SignalCellularNodataRounded';
import ScreenRotationRoundedIcon from '@mui/icons-material/ScreenRotationRounded';


import HailRoundedIcon from '@mui/icons-material/HailRounded'; /* About me app icon */
import FolderZipRoundedIcon from '@mui/icons-material/FolderZipRounded'; /* File app */
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'; /* Business card download app*/
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded'; /* For education app */
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded'; /* Work Experience app */
import ArtTrackRoundedIcon from '@mui/icons-material/ArtTrackRounded'; /* Projects App */
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'; /* alternate projects app icon */
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded'; /* Mission Statement app */
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'; /* Contact information app */
import EmailIcon from '@mui/icons-material/Email';

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'; /* Trash can un-filled, below is filled */
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const TabletHome = () => {
    
    return (
    <div className={styles.homeScreen}>
        
        <div className={styles.appIconsGrid}>
            <Link to="/Bio" className={styles.appIcon}>
                <AppIcon icon={<HailRoundedIcon />} title="About Me">
                </AppIcon>
            </Link>
            
            <Link to="/EmailApp" className={styles.appIcon}>
                <AppIcon icon={<EmailIcon />} title="U-Mail">
                </AppIcon>
            </Link>

            <Link to="/Calculator" className={styles.appIcon}>
                <AppIcon icon={<CalculateRoundedIcon />} title="Calculator">
                </AppIcon>
            </Link>

            <Link to="/Calendar" className={styles.appIcon}>
                <AppIcon icon={<CalendarMonthRoundedIcon />} title="Calendar">
                </AppIcon>
            </Link>
        </div>
    </div>
    );
};

export default TabletHome;