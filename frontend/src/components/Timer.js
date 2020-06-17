import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: this.props.length,
            repetions: this.props.repetions,
            currentTime: this.props.length,
            currentRep: 0,
            timing: false,
            paused: false
        }
    }
    

    startTimer = async () => {
        this.setState({timing: true})
        console.log("start")

        while(this.state.currentRep < this.state.repetions) {
            this.timer = setInterval(() => {
                this.setState({currentTime: this.state.currentTime-1})
                if(this.state.currentTime == 0){
                    this.setState({
                        currentRep: this.state.currentRep+1,
                        currentTime: this.state.length
                    })
                }
            }, 1000)
        }

        this.setState({timing: false})
    }

    pauseTimer = () => {
        if(!this.state.paused){
            this.setState({paused: true})
            clearInterval(this.timer)
            console.log("paused")
        }else{
            this.setState({paused: false})
            setInterval(this.timer, 1000);
            console.log("resumed")
        }
    }

    resetTimer = () => {
        this.setState({
            currentRep: 0,
            currentTime: this.state.length
        })
        console.log("reset")
    }

    render() {
        return (
            <div className="timer">
                <h3>timer: {this.state.time}</h3>
                <button onClick={()=>{this.startTimer}} disabled={this.state.timing}>Start</button>
                <button onClick={()=>{this.pauseTimer}} disabled={!this.state.timing}>{this.state.paused?"Resume":"Pause"}</button>
                <button onClick={()=>{this.startTimer}} disabled={!this.state.timing}>Stop</button>
                <button>reset</button>
            </div>
        );
    }
}

export default Timer;