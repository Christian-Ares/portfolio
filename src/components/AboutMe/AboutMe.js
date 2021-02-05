import React from 'react';
import Typical from 'react-typical';
// import Button from "../Button/Button";
// import { AwesomeButton } from "react-awesome-button";
// import styles from "react-awesome-button/src/styles/themes/theme-rickiest";

import './Aboutme.css'

export const AboutMe = () => {
    return (
        <div className="aboutMe" id="aboutMe">
            <h1>About Me</h1>
            <p>Hi! My name's Christian</p>
            <p>I'm a...
                <Typical
                steps={['Full Stack Developer', 1000, 'Back End Developer', 500, 'Front End Developer', 250]}
                loop={Infinity}
                />

            </p>    
                <section className="container">

                    <article className="img-text">
                        <div>
                            <img src="/images/Christian.jpg" alt="Christian Ares" className="photo" />
                        </div>
                        <div className="button-text">
                            <p>
                            After several years in the hostelry industry, I decided to turn my life around and train as a web developer. I like programming in all its aspects.
                            I like to learn new things every day, because I believe that learning should never stop.
                            I love teamwork, working hard and with dedication, leaning on my colleagues to achieve all the goals we set ourselves.
                            My goal is to work as a Full Stack Developer in a company where I can train and grow, both as a developer and as a person.
                            </p>
                            <button>Resume</button>
                            {/* <Button>Resume</Button> */}
                            {/* <AwesomeButton
                            size="small"
                            cssModule={styles} 
                            type="anchor"> Resume
                            </AwesomeButton> */}
                        </div>
                    </article>
                    
                </section>
        </div>
    )
};