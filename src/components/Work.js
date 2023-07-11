import "./ProjectCard.css"
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

import React from 'react';


const Work = () => {
    return (
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <ProjectCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                );
            })}
        </div>
    )
}

export default Work