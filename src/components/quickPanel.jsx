import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/componentStyles/quickPanel.module.css';

import InformationBar from './informationBar';

import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

/* Quick settings icons */
import WifiCallingRoundedIcon from '@mui/icons-material/WifiCallingRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import AirplanemodeInactiveRoundedIcon from '@mui/icons-material/AirplanemodeInactiveRounded';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';

/* I'll be implementing vanilla CSS div here to create a quick access panel layout. */
const QuickPanel = () => {
    //setting up state variables to track panel drag status and position
    const [panelPosition, setPanelPosition] = useState(-95);
    const [isDragging, setIsDragging] = useState(false);
    const [airplaneMode, setAirplaneMode] = useState(false);
    // Add a specific state to track if panel is fully open
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    // React Refs are useful for tracking things when you don't want it to re-render -- here we will need one for the panel itself - one for the starting position of the drag - and one to track the starting position of the panel when drag begins
    const panelRef = useRef(null);
    const startYRef = useRef(0);
    const startPanelPositionRef = useRef(0);

    const iconDefaults = [
        { 
            icon: airplaneMode ? AirplanemodeActiveRoundedIcon : AirplanemodeInactiveRoundedIcon, 
            title: 'Airplane Mode',
            onClick: () => setAirplaneMode(!airplaneMode)
        },
        { icon: WifiIcon, title: 'WiFi' },
        { icon: BluetoothIcon, title: 'Bluetooth' },
        { icon: WifiCallingRoundedIcon, title: 'Wifi Calling' },
        { icon: BrightnessAutoIcon, title: 'Auto Brightness' },
        { icon: FlashlightOnIcon, title: 'Flashlight' },
    ];

    // Functions to handle pulldown panel
    function handleDragStart(e) {
        // Prevent default to avoid text selection during drag
        e.preventDefault();
        
        // Get Y position from either mouse or touch event
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        // Store the starting position in refs
        startYRef.current = clientY;
        startPanelPositionRef.current = panelPosition;
        
        setIsDragging(true);
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        
        // Get current pointer position
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        const deltaY = clientY - startYRef.current;
        const newPosition = startPanelPositionRef.current + deltaY;
        
        // Update panel position (with constraints)
        setPanelPosition(Math.min(0, Math.max(-100, newPosition)));
    }

    function handleDragEnd() {
        if (!isDragging) return;
        
        setIsDragging(false);
        
        // Determine where to snap based on current position
        if (panelPosition > -30) {
            // Open fully
            setPanelPosition(0);
            setIsPanelOpen(true); // Set panel as open
        } else if (panelPosition > -80) {
            // Peek
            setPanelPosition(-60);
            setIsPanelOpen(false); // Not fully open
        } else {
            // Close
            setPanelPosition(-90);
            setIsPanelOpen(false); // Not open
        }
    }

    // Handle closing the panel with a specific close button
    const handleClosePanel = () => {
        setPanelPosition(-90);
        setIsPanelOpen(false);
    };

    useEffect(() => {
        if (isDragging) {
            // Use capture phase to ensure our handlers run first
            window.addEventListener('mousemove', handleDragMove, { capture: true });
            window.addEventListener('touchmove', handleDragMove, { capture: true, passive: false });
            window.addEventListener('mouseup', handleDragEnd, { capture: true });
            window.addEventListener('touchend', handleDragEnd, { capture: true });
            
            return () => {
                window.removeEventListener('mousemove', handleDragMove, { capture: true });
                window.removeEventListener('touchmove', handleDragMove, { capture: true });
                window.removeEventListener('mouseup', handleDragEnd, { capture: true });
                window.removeEventListener('touchend', handleDragEnd, { capture: true });
            };
        }
    }, [isDragging, panelPosition]); // Add panelPosition as dependency

    // Get current date and time
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    // Set up brightness control
    const [brightness, setBrightness] = useState(90);
    
    // Apply brightness to the tablet screen
    useEffect(() => {
        // Find the screen element (parent of this component)
        const screenElement = document.querySelector('.screen') || 
                             document.querySelector('[class*="screen"]');
        
        if (screenElement) {
            screenElement.style.filter = `brightness(${brightness/100})`;
        }
    }, [brightness]);

    return (
        <div 
            ref={panelRef} 
            className={styles.wrapper} 
            style={{
                transform: `translateY(${panelPosition}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
            // Stop propagation to prevent other handlers from interfering
            onClick={(e) => e.stopPropagation()}
        >
            
            <div className={styles.dateTime}>
                {dateTimeString}
            </div>
            <div className={styles.quickdiv}>
                <div className={styles.quickGrid}>
                    {iconDefaults.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index} 
                                onClick={item.onClick}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}
                            >
                                <IconComponent style={{ fontSize: '2rem', color: 'white' }} />
                                <span style={{ marginTop: '5px', fontSize: '0.8rem', color: 'white' }}>
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.brightnessSlider}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>
                    <span style={{ color: 'white', marginRight: '10px' }}>Brightness</span>
                    <input 
                        type="range" 
                        min="20" 
                        max="100" 
                        value={brightness}
                        onChange={(e) => setBrightness(parseInt(e.target.value))}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <div className={styles.infoBar}>
                
            </div>

            {!isPanelOpen && (
                <div className={styles.infoBar} >
                    <InformationBar />
                </div>
            )}
            
            {/* Add a close button when panel is fully open */}
            {isPanelOpen && (
                <div 
                    style={{
                        textAlign: 'center',
                        padding: '10px',
                        color: 'white',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                    onClick={handleClosePanel}
                >
                    Close Panel
                </div>
            )}
            
            <div 
                className={styles.handleSection}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                <div className={styles.handle}>
                    <DragHandleRoundedIcon />
                </div>
            </div>
        </div>
    );
};

export default QuickPanel;
