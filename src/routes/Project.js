import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection2 from '../components/HeroSection2';
import Work from '../components/Work';

const project = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection2 heading="PORTFOLIO." />
            <Work/>
            <Footer/>
        </div>
    )
}

export default project;