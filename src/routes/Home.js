import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Article from '../components/Articles';

function home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Article/>
            <Footer/>
        </div>
    );
}

export default home