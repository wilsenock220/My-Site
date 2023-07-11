import { Link } from 'react-router-dom';
import './HeroSection.css';

import React from 'react';
import HeroImg from "../assets/hero-image.png"

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>Hey, I'm Wilstan Onditi</p>
                <h1>I am a Frontend <br></br> Web Developer</h1>
                <Link to='/contact' className='btn'>Get in touch</Link>
            </div>
            <div className='hero-img'>
                <img className='img' src={HeroImg} alt='HeroImg'/>
            </div>
        </div>
    )
}

export default HeroSection