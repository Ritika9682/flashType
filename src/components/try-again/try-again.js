import React from "react";
import './try-again.css';

const Tryagain=({words,characters,startAgain,wpm})=>{
    return(
        <div className="try-again-cont">

        <h1>Test Results!</h1>
        <div className="result-container">
            <p> <b>Character :</b> {characters}</p>
            <p> <b>Words :</b> {words}</p>
            <p> <b>Speed :</b> {wpm} wpm </p>
        </div>

        <div>
                <button
                    onClick={() => startAgain()}
                    className="end-buttons start-again-btn"
                >
                    Re-try
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com",
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons share-btn"
                >
                    Share
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=theleanprogrammer.com",
                            "Twitter",
                            "width=800,height=600"
                        )}
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default Tryagain;