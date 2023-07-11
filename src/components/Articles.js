import "./Articles.css"
import ArticleCard from "./ArticleCard";
import ArticleCardData from "./ArticleCardData";

import React from 'react';
import { NavLink } from "react-router-dom";


const Article = () => {
    return (
        <>
        <div className="articles-top">
            <h2>Articles & News</h2>
            <NavLink to='https://www.linkedin.com/newsletters/designing-for-the-web-7061575287314034688/' className="btn">Browse Articles</NavLink>
        </div>
        <div className="article-container">
            {ArticleCardData.map((val, ind) => {
                return(
                    <ArticleCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        date={val.date}
                        view={val.view}
                    />
                );
            })}
        </div>
        </>
    )
}

export default Article