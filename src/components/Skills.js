import { FaDraftingCompass, FaLaptop, FaTools } from "react-icons/fa";
import "./Skills.css";
import React from 'react'

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-title">
                <h2>My Skills & Software</h2>
            </div>
            <div className="skills-body">
                <div className="design">
                    <FaDraftingCompass size={40} style={{color:'#77b7da', background: 'rgb(119, 183, 218, 0.4)', padding: '6px', borderRadius: '5px'}}/>
                    <h4>Design</h4>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Web Design</li>
                        <li>Design Thinking</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="development">
                    <FaLaptop size={40} style={{color:'#efd459', background: 'rgb(239, 212, 89, 0.4)', padding: '6px', borderRadius: '5px'}}/>
                    <h4>Development</h4>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="tools">
                    <FaTools size={40} style={{color:'#9642e9', background: 'rgb(150, 66, 233, 0.4)', padding: '6px', borderRadius: '5px'}}/>
                    <h4>Tools</h4>
                    <ul>
                        <li>Webflow</li>
                        <li>Figma</li>
                        <li>Notion</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;