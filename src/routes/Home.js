import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Article from '../components/Articles';
import MyServices from '../components/MyServices';
import HomeAbout from '../components/HomeAbout';

function home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <MyServices/>
            <HomeAbout/>
            <Article/>
            <Footer/>
        </div>
    );
}

export default home;