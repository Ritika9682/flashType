import React from "react";
import Challengedetailscard from "../Challengedetailscard/Challengedetails";
import Typingtest from "../Typingtestcont/Typingtest";
import "./Typingchallenge.css";

const Typingchallenge = ({onInputChange, selectedPara,words,characters,timestarted,timeRemaining,wpm,testInfo}) => {
    return (
        <div className="typing-challenge-cont">
            {/* details */}
            <div className="details-container">
                <Challengedetailscard cardName="Words" cardValue={words}/>
                <Challengedetailscard cardName="Characters" cardValue={characters}/>
                <Challengedetailscard cardName="Speed" cardValue={wpm}/>
            </div>
            {/* real challenge */}
            <div className="typewriter-cont">
            <Typingtest testInfo={testInfo} onInputChange={onInputChange} timeRemaining={timeRemaining} timestarted={timestarted} selectedpara={selectedPara}/>

            </div>
        </div>
    )
}

export default Typingchallenge;