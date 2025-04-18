import React from 'react';
import styles from "../styles/bio.module.css";

import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

const Bio = () => {
    const portfOwner = {
        fName: "Jacob",
        lName: "Jones",
        title: "Web Developer",
        email: "jdj.creates@gmail.com",
        location: "TN, USA",
        phone: "Let's get in touch!",
        technologies: ["HTML", "CSS", "Javascript", "C#", "React", "Inkscape", "Blender", "Bootstrap", "Open Graph Protocol", ]
    };    

    const fullName = portfOwner.fName + portfOwner.lName;

    const bioDescription = [
        "Hi, I'm Jacob — a passionate web developer from Tennessee dedicated to crafting interactive, visually appealing digital experiences. I specialize in creating user-centric websites that blend modern design with smooth functionality. Whether it's a responsive e-commerce platform, a dynamic portfolio, or a cutting-edge web application, I strive to turn ideas into engaging online realities.",

        "My work is driven by a commitment to clean code, innovative design, and practical solutions that not only look great but also perform seamlessly. I enjoy experimenting with new technologies and trends to stay ahead of the curve and continuously enhance my skill set. Let's collaborate and bring your vision to life!"
    ]

    return (
        
        <div className={styles.main}>
            <div className={styles.backgroundPic}>
                <TerminalRoundedIcon fontSize="large" />
            </div>
            <div className={styles.leftContainer}>
                
                <section className={styles.image}>
                    <img src="" id="jjImg" alt="An image of web developer Jacob Jones" className={styles.proImage}></img>
                    <label for="jjImg" className={styles.fullName}>{fullName}</label>
                </section>


                <dl className={styles.personalInfo}>
                    <dt><strong>Email:</strong></dt>
                    <dd>jdj.creates@gmail.com</dd>

                    <dt><strong>Location:</strong></dt>
                    <dd>Tennessee, USA</dd>

                    <dt><strong>Phone:</strong></dt>
                    <dd>Direct Message for my number please!</dd>

                </dl>
            </div>

           <div className={styles.rightContainer}>
            <div className={styles.desc1}>
                <p>{bioDescription[0]}</p>
            </div>
            <div className={styles.desc2}>
                <p>{bioDescription[1]}</p>
            </div>
           </div>

        </div>
    );
};

export default Bio;