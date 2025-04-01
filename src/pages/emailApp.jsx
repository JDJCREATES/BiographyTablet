import React from 'react';
import { ClassNames } from '@emotion/react';
import '../styles/EmailApp.module.css';
import { useForm, ValidationError } from '@formspree/react';

/* In lieue of building a backend for my porfolio for now I am using 'FormSpree' to enable sending me an email directly from the experience */
const EmailApp = () => {
    return (
        <div className='page-container'>
            <div className='head-section'>
                <h1>Use this form to send me an email!</h1>
            </div>
            <div className='form'>
                <form action="null" method="post">
                    <p>Your Email:
                        <input type="text" name="email" size="20" maxlength="75" />
                    </p>
                    <p>Questions? I've got answers, just shoot me an email!
                        
                    </p>
                </form>
            </div>
        </div>
    );
};

export default EmailApp;