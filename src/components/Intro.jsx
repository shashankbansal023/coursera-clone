import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="first-block">
                <h1 style={{fontSize:'80px',width:'60px'}}>Learn Without Limits</h1>
                <h2 style={{fontSize:"30px"}}>Take the next step in your career with a world class learning experience.</h2>
                <button class="join">Join For Free</button>
            </div>
            <div className="img-block">
                <img src="https://bit.ly/2Sw2WJR"/>
            </div>
        </div>
    )
}

export default Intro
