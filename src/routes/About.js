import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutTop from '../components/AboutTop';
import MyResume from '../components/MyResume';
import Skills from '../components/Skills';

const about = () => {
    return (
        <div>
            <Navbar/>
            <AboutTop/>
            <MyResume/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default about