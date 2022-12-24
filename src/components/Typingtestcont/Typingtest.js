import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./Typingtest.css";

const Typingtest = ({ timeRemaining,onInputChange,timestarted ,testInfo}) => {

    return (<div className="typing-test">
        <div className="timer-container">
            <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
            <p className="timer-info">{!timestarted &&"Start typing to start the test"}</p>
        </div>

        <div className="test-area-container">
            <div className="test-area-left">
                <div className="textarea test-para">
                  
                    {
                        testInfo?.map((individualLetterInfo,index)=>{
                        return (<TestLetter key={index} individualLetterInfo={individualLetterInfo}/>);
                        })
                    }
                </div>
            </div>
            <div className="test-area-right">
                <textarea
                onChange={(e) => onInputChange(e.target.value)}
                    className="textarea"
                    placeholder="Start typing here"
                ></textarea>
            </div>
        </div>
    </div>)
}
export default Typingtest;