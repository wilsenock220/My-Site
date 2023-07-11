import "./Articles.css"

import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ArticleCard = (props) => {
    return (
        <div className="article-card">
            <img src={props.imgsrc} alt="bigfish"/>
            <div className="article-details">
                <NavLink to={props.view}>
                    <h2 className="article-title">{props.title}</h2>
                </NavLink>
                <p className="art-date">Frontend Tips - {props.date}</p>
            </div>
        </div>
    )
}

export default ArticleCard;