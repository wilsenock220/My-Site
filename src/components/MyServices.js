import { FaCode, FaPenNib, FaRegLightbulb, FaUikit } from "react-icons/fa";
import "./MyServices.css"

import React from 'react';

const MyServices = () => {
    return (
        <div className="services">
            <div className="services-top">
                <h2>My Services</h2>
                <p>Hello! I'm Wilstan, a passionate frontend developer dedicatedto <br></br>crafting engaging and user-friendly web experiences</p>
            </div>
            <div className="service-cards">

                <div className="service-card">
                    <div className="service-icon" style={{ background: 'rgb(0, 255, 255, 0.2)'}}>
                        <FaPenNib size={40} style={{ color:'rgb(0, 255, 255, 0.8)'}}/>
                    </div>
                    <div className="service-content">
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-icon" style={{ background: 'rgb(249, 181, 242, 0.2)'}}>
                        <FaUikit size={40} style={{ color:'rgb(249, 181, 242, 0.8)'}}/>
                    </div>
                    <div className="service-content">
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-icon" style={{ background: 'rgb(255, 232, 103, 0.2)'}}>
                        <FaRegLightbulb size={40} style={{ color:'rgb(255, 232, 103, 0.8)'}}/>
                    </div>
                    <div className="service-content">
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-icon" style={{ background: 'rgb(143, 40, 234, 0.2)'}}>
                        <FaCode size={40} style={{ color:'rgb(143, 40, 234, 0.5)'}}/>
                    </div>
                    <div className="service-content">
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyServices;