import "./ProjectCard.css"

import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="bigfish"/>
            <h2 className="project-title">{props.title}</h2>
            <p className="pro-details">{props.text}</p>
            <NavLink to={props.view} className="btn-sec">Visit Site <FaArrowRight size={16} style={{ color:"#0a081c", margin: "0 0 0 0.4rem" }}/></NavLink>
        </div>
    )
}

export default ProjectCard