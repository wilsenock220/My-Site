import { Link, NavLink } from "react-router-dom";
import "./MyResume.css";
import React from 'react';
import gwarivalogo from "../assets/gwariva-logo.png";
import { FaLink } from "react-icons/fa";

const MyResume = () => {
    return (
        <div className="resume">
            <div className="resume-title">
                <h2>Take a look at my resume</h2>
                <Link to="/contact" className="btn-medium">Get in touch</Link>
            </div>
            <div className="experience">
                <div className="experience-card">
                    <div className="card-top">
                        <img src={gwarivalogo} alt="gwarivalogo"/>
                        <h4>Gwariva</h4>
                        <NavLink to="https://gwariva.com/">
                            <FaLink size={12} style={{ color:"#0a081c"}}/>
                        </NavLink>
                    </div>
                    <div className="experience-title">
                        <h3>Lead Frontend Developer</h3>
                        <p>June 2022 - Present</p>
                    </div>
                    <p>Led the frontend development efforts at Gwariva, a fast-paced startup specializing in music education.</p>
                </div>
                <div className="experience-card">
                    <div className="card-top">
                        <img src={gwarivalogo} alt="gwarivalogo"/>
                        <h4>Gwariva</h4>
                        <NavLink to="https://gwariva.com/">
                            <FaLink size={12} style={{ color:"#0a081c"}}/>
                        </NavLink>
                    </div>
                    <div className="experience-title">
                        <h3>Lead Frontend Developer</h3>
                        <p>June 2022 - Present</p>
                    </div>
                    <p>Led the frontend development efforts at Gwariva, a fast-paced startup specializing in music education.</p>
                </div>
                <div className="experience-card">
                    <div className="card-top">
                        <img src={gwarivalogo} alt="gwarivalogo"/>
                        <h4>Gwariva</h4>
                        <NavLink to="https://gwariva.com/">
                            <FaLink size={12} style={{ color:"#0a081c"}}/>
                        </NavLink>
                    </div>
                    <div className="experience-title">
                        <h3>Lead Frontend Developer</h3>
                        <p>June 2022 - Present</p>
                    </div>
                    <p>Led the frontend development efforts at Gwariva, a fast-paced startup specializing in music education.</p>
                </div>
                <div className="experience-card">
                    <div className="card-top">
                        <img src={gwarivalogo} alt="gwarivalogo"/>
                        <h4>Gwariva</h4>
                        <NavLink to="https://gwariva.com/">
                            <FaLink size={12} style={{ color:"#0a081c"}}/>
                        </NavLink>
                    </div>
                    <div className="experience-title">
                        <h3>Lead Frontend Developer</h3>
                        <p>June 2022 - Present</p>
                    </div>
                    <p>Led the frontend development efforts at Gwariva, a fast-paced startup specializing in music education.</p>
                </div>
            </div>
        </div>
    )
}

export default MyResume;