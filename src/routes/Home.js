import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Article from '../components/Articles';
import MyServices from '../components/MyServices';

function home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <MyServices/>
            <Article/>
            <Footer/>
        </div>
    );
}

export default home;