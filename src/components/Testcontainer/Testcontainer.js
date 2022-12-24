import React from "react";
import Tryagain from "../try-again/try-again";
import Typingchallenge from "../TypingChallenge/Typingchallenge";
import './Testcontainer.css';

const Testcontainer = ({selectedPara,startAgain,words,characters,onInputChange,timestarted,timeRemaining,wpm,testInfo }) => {

    return (<div className="test-container">
        {
            timeRemaining >0?(
                <div data-aos="fade-up" className="typing-challenge-cont">
            <Typingchallenge onInputChange={onInputChange} timeRemaining={timeRemaining} testInfo={testInfo} selectedPara={selectedPara} words={words} characters={characters} wpm={wpm} timestarted={timestarted} />
        </div>
            ):(
                <div className="try-again-container">
        <Tryagain words={words} startAgain={startAgain} characters={characters} wpm={wpm}/>
    </div>
            )
        }
    </div>);
};

export default Testcontainer;