import "./Footer.css";

import React from 'react'
import { FaCopyright, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <hr></hr>
            <div className="footer-container">
                <div className="left">
                    <h1>Wilstan.</h1>
                    <p>Hello! I'm Wilstan, a passionate <br></br> frontend developer dedicated <br></br>to crafting engaging and <br></br>user-friendly web experiences</p>
                    <div className="social-icons">
                        <Link>
                            <FaTwitter size={30} style={{ color:"#0a081c", margin: "0 1rem 0 0" }}/>
                        </Link>
                        <Link>
                            <FaInstagram size={30} style={{ color:"#0a081c", margin: "0 1rem 0 0" }}/>
                        </Link>
                        <Link>
                            <FaLinkedin size={30} style={{ color:"#0a081c", margin: "0 1rem 0 0" }}/>
                        </Link>
                        <Link>
                            <FaWhatsapp size={30} style={{ color:"#0a081c", margin: "0 1rem 0 0" }}/>
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <h2>Pages</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/project">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <h2>Contact Me</h2>
                    <ul>
                        <li>
                            <FaMailBulk size={18} style={{ color:"#707070", margin: "1rem" }}/>
                            <p>wilsenock220@gmail.com</p>
                        </li>
                        <li>
                            <FaPhone size={18} style={{ color:"#707070", margin: "1rem" }}/>
                            <p>+254 113 451 337</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="copyright">
                <p>Copyright</p><FaCopyright size={16} style={{ color:"#707070", margin: "0.6rem" }}/><p>Wilstan</p>
            </div>
        </div>
    )
}

export default Footer