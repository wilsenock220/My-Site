import "./AboutTop.css";
import about1 from "../assets/about1.png";

import React from 'react'

const AboutTop = () => {
    return (
        <div className="about-top">
            <div className="left">
                <img src={about1} className="about1" alt="about1" />
            </div>
            <div className="right">
                <h1>I'm Wilstan Onditi, a Frontend Web Developer</h1>
                <p>I am committed to crafting engaging and intuitive experiences for users. I thrive on collaborating with others to bring ideas to life and am always eager to learn and grow in my field.</p>
            </div>
        </div>
    )
}

export default AboutTop;