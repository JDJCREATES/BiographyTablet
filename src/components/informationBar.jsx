import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/componentStyles/infobar.module.css'

/* Information bar icons */
import FiveGRoundedIcon from '@mui/icons-material/FiveGRounded';
import Wifi2BarRoundedIcon from '@mui/icons-material/Wifi2BarRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import SignalCellular3BarRoundedIcon from '@mui/icons-material/SignalCellular3BarRounded';

import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';

const InformationBar = () => {
    const [batteryLevel, setBatteryLevel] = useState(7); // Start with full battery
    const [wifiStrength, setWifiStrength] = useState(1); // 0 = low, 1 = high
    
    // Use refs to track time
    const startTimeRef = useRef(Date.now());
    const lastWifiChangeRef = useRef(Date.now());

    const batteryIcons = [
        { id: "zero", icon: Battery0BarIcon },
        { id: "one", icon: Battery1BarIcon },
        { id: "two", icon: Battery2BarIcon },
        { id: "three", icon: Battery3BarIcon },
        { id: "four", icon: Battery4BarIcon },
        { id: "five", icon: Battery5BarIcon },
        { id: "six", icon: Battery6BarIcon },
        { id: "full", icon: BatteryFullIcon },
        { id: "alert", icon: BatteryAlertIcon }
    ];

    // Function to get current battery level based on elapsed time
    const getCurrentBatteryLevel = () => {
        const now = Date.now();
        const elapsedMinutes = (now - startTimeRef.current) / 60000; // Convert to minutes
        
        // Battery drains 1 level every 5 minutes (adjust as needed)
        const drainRate = 5; // minutes per level
        const levelsDrained = Math.floor(elapsedMinutes / drainRate);
        
        // Start from full (7) and drain down to 0
        const newLevel = Math.max(0, 7 - levelsDrained);
        
        // If battery is critically low (level 0), show alert icon (8)
        return newLevel === 0 ? 8 : newLevel;
    };

    // Function to randomly change WiFi strength
    const randomizeWifiStrength = () => {
        const now = Date.now();
        // Only change WiFi strength every 30-90 seconds
        if (now - lastWifiChangeRef.current > (30000 + Math.random() * 60000)) {
            // 30% chance to change WiFi strength
            if (Math.random() < 0.3) {
                setWifiStrength(wifiStrength === 0 ? 1 : 0);
            }
            lastWifiChangeRef.current = now;
        }
    };

    useEffect(() => {
        // Check battery level every 30 seconds
        const batteryInterval = setInterval(() => {
            const newLevel = getCurrentBatteryLevel();
            if (newLevel !== batteryLevel) {
                setBatteryLevel(newLevel);
            }
        }, 30000);
        
        // Check WiFi strength every 10 seconds
        const wifiInterval = setInterval(() => {
            randomizeWifiStrength();
        }, 10000);
        
        return () => {
            clearInterval(batteryInterval);
            clearInterval(wifiInterval);
        };
    }, [batteryLevel, wifiStrength]);

    // Get the correct WiFi icon based on strength
    const WifiIcon = wifiStrength === 0 ? Wifi2BarRoundedIcon : WifiRoundedIcon;

    // Get the current time for the status bar
    const currentTime = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <span className={styles.time}>{currentTime}</span>
            </div>
            <div className={styles.rightSection}>
                <FiveGRoundedIcon className={styles.statusIcon} />
                <SignalCellular3BarRoundedIcon className={styles.statusIcon} />
                <WifiIcon className={styles.statusIcon} />
                {React.createElement(batteryIcons[batteryLevel].icon, { className: styles.statusIcon })}
            </div>
        </div>
    );
};

export default InformationBar;
