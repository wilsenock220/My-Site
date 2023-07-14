import "./HomeAbout.css";
import about2 from "../assets/about1.png";


import React from 'react'
import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="home-about">
            <div className="about-img">
                <img src={about2}/>
            </div>
            <div className="about-details">
                <h3>About Me</h3>
                <p>I am committed to crafting engaging and intuitive experiences for users. I thrive on collaborating with others to bring ideas to life and am always eager to learn and grow in my field.</p>
                <Link to='/about' className="btn">More About Me</Link>
            </div>
        </div>
    )
}

export default HomeAbout;