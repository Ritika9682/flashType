import React from "react";
import Testcontainer from "../Testcontainer/Testcontainer";
import './Challengesection.css';
const Challengesection=({selectedPara,startAgain,words,characters,timestarted,timeRemaining,wpm,testInfo,onInputChange})=>{
    return (
        <div className="challenge-section-container">
        <h1 data-aos="fade-down"className="challenge-section-header">Take speed test now!!</h1>
        <Testcontainer 
        timeRemaining={timeRemaining}
        timestarted={timestarted}
        selectedPara={selectedPara}
        words={words} characters={characters} wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
        />
        </div>
    )
}

export default Challengesection;


