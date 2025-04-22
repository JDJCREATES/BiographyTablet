import React, {useState} from 'react';
import styles from '../styles/calculator.module.css';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Calculator = () => {
    const symbols = [
        {name: "addition", icon:<AddIcon />, method: 'add'},
        {name: "subtraction", icon:<RemoveIcon />, method: 'subtract'},
        {name: "clear", icon:<CancelPresentationIcon />, method: "clearDisplay"},
        {name: "removeOne", icon:<BackspaceIcon />, method: "removeLastNum"},

    ]
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [displayValue, setDisplayValue] = useState('0');

    const handleNumberClick = (number) => {
        if (displayValue === '0') {
            setDisplayValue(number.toString());
        }
        else {
            setDisplayValue(displayValue + number.toString());
        }
    };

    const handleExit = () => {
        window.history.back();
    };

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.header}>
                <div className={styles.numDisplay}>
                    {displayValue}
                </div>
            </div>

            <div className={styles.bottomSec}>
                <div className={styles.conPad1}>

                </div>
                <div className={styles.numPad}>
                    {numbers.map((number, index) => <button 
                    key={index} 
                    onClick={() => handleNumberClick(number)}
                    className={styles.numBlck}>
                        {number}
                    </button>)}
                </div>
                <div className={styles.conPad2}>
                   
                </div>
            </div>

        </div>
    );
};

export default Calculator;