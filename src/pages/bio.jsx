import React from 'react';



const Bio = () => {
    const fullName = "Jacob Jones";

    const bioDescription = [
        "Hi, I'm Jacob Jones—a passionate web developer from Tennessee dedicated to crafting interactive, visually appealing digital experiences. I specialize in creating user-centric websites that blend modern design with smooth functionality. Whether it's a responsive e-commerce platform, a dynamic portfolio, or a cutting-edge web application, I strive to turn ideas into engaging online realities.",

        "My work is driven by a commitment to clean code, innovative design, and practical solutions that not only look great but also perform seamlessly. I enjoy experimenting with new technologies and trends to stay ahead of the curve and continuously enhance my skill set. Let's collaborate and bring your vision to life!"
    ]

    return (
        
        <div className='main'>

            <div className='left-container'>

                <img src="null" alt="An image of Jacob" className='jj-image'></img>
                    <h1 className='full-name'>{fullName}</h1>

                <dl className='personal-info'>
                    <dt>Email:</dt>
                    <dd>jdj.creates@gmail.com</dd>

                    <dt>Location:</dt>
                    <dd>Tennessee, USA</dd>

                    <dt>Phone:</dt>
                    <dd>Direct Message for my number please!</dd>

                </dl>
            </div>

           <div className='right-container'>
            <div className='description1'>
                <p>{bioDescription[0]}</p>
            </div>
            <div className='description2'>
                <p>{bioDescription[1]}</p>
            </div>
           </div>

        </div>
    );
};

export default Bio;