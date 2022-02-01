import React from "react";
import selfIcon from '../assets/img/selfIcon.jpg';

function LandingPage(){

    return (
        <div className="LandingPage">
            <img className='icon' src={selfIcon} />
            <h1 className="title">Julie Ann Meng</h1>
            <h2 className="subtitle">Software Engineer</h2>
            <h3 className="info">JavaScript | React.js | Ruby on Rails</h3>
        </div>
    )
}

export default LandingPage;