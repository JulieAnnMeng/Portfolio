import React from "react";
import code_b from "../assets/img/portfolio/Code_B.png";
import check from "../assets/img/portfolio/CheckMark.png";
import garden from "../assets/img/portfolio/Project_Garden.png";

function Portfolio(){

    return (
        <div className="portfolio">
            <h1 className="page-title">Portfolio</h1>
            <div className="block">
                <a href="https://code--b.herokuapp.com/"><img className="first" src={code_b} /></a>
                <a href="https://github.com/Task-Spot/the-task-spot-v2"><img className="middle" src={check} /></a>
                <a href="https://github.com/JulieAnnMeng/project-garden"><img className="last" src={garden} /></a>
            </div>
        </div>
    )
}

export default Portfolio;