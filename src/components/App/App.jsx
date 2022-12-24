import React from "react";
import Challengesection from "../Challengesection/Challengesection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import './App.css';
import {SAMPLE_PARAGRAPHS} from "./../../data/samplepara";

const TotalTime=60;
const Serviceurl="http://metaphorpsum.com/paragraphs/1/9";
const DefaultState ={
    selectedPara:"RITIKA",
    timestarted:false,
    timeRemaining:TotalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[],
}

class App extends React.Component{
    state=DefaultState;



    fetchNewParagraphFallback = () => {
        const data =
            SAMPLE_PARAGRAPHS[
                Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];

        const selectedParaArray = data.split("");
        const testInfo = selectedParaArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        // Update the testInfo in state
        this.setState({
            ...DefaultState,
            selectedPara: data,
            testInfo,
        });
    };
    fetchNewPara=()=>{
        fetch(Serviceurl).then(response=>response.text()).then(data => {
        
            const selectedParaArray=data.split("");
            const testInfo= selectedParaArray.map(selectedLetter=>{
                return{
                    testLetter:selectedLetter,
                    status:"notAttempted"
                }
            })
    
            this.setState({...DefaultState,testInfo,selectedPara:data})
            })
    }
    componentDidMount(){
       
        this. fetchNewParagraphFallback();
      
    }

    startAgain = () => this. fetchNewParagraphFallback();
    startTimer = () => {
        this.setState({ timestarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                // Change the WPM and Time Remaining
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTime
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };


    handleUserInput=(inputValue)=>{
    
        if (!this.state.timestarted) this.startTimer();
 
        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }

        if (index >= this.state.selectedPara.length) {
            this.setState({
                characters,
                words,
            });
            return;
        }
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedPara.length - 1))
            testInfo[index + 1].status = "notAttempted";

        const isMistake = inputValue[index] === testInfo[index].testLetter;

        testInfo[index].status = isMistake ? "correct" : "incorrect";

        this.setState({
            testInfo,
            words,
            characters,
        });
    };
    render(){
       return (
            <div className="app">
                  {/* Navbar */}
                  
                  <Navbar/>

                  {/* Landing */}

                  <Landing/>

                  {/* Challenge */}
                  <Challengesection
                    selectedPara={this.state.selectedPara}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timestarted={this.state.timestarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                  />
                  
                  {/* Footer */}
                    
                  <Footer/>

            </div>
        )
    }
}
export default App;