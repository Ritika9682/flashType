import React from "react";
import "./Landing.css";
import flash from "./../../assets/heroflash.png";
import Typewriter from 'typewriter-effect';
const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className=" Landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    

                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?','Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left" className="flash-hero" src={flash} alt="flash" />
            </div>
        </div>
    )
}

export default Landing;