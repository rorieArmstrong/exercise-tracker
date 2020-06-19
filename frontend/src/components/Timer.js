import React, { Component } from 'react';
import UIfx from 'uifx';
// import tickAudio from '../sounds/tick.mp3';
import finishAudio from '../sounds/end.mp3';

// const tick = new UIfx({asset: tickAudio});
const finish = new UIfx({asset: finishAudio});

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: this.props.length,
            repetitions: this.props.repetitions,
            currentTime: this.props.length,
            currentRep: 0,
            timing: false,
            paused: false
        }
    }

    startTimer = async () => {
        this.setState({timing: true})
        console.log("start")

        while(this.state.currentRep < this.state.repetitions) {
            this.timer = setInterval(() => {
                this.setState({currentTime: this.state.currentTime-1})
                // tick.play()
                if(this.state.currentTime === 0){
                    this.setState({
                        currentRep: this.state.currentRep+1,
                        currentTime: this.state.length
                    })
                    finish.play()
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
            currentTime: this.state.length,
            timing: false
        })
        console.log("reset")
    }

    render() {
        return (
            <div className="timer">
                <h3>timer: {this.state.time}</h3>
                {this.state.timing?
                    <button onClick={() => {return this.startTimer}} disabled={this.state.timing}>Start</button>:
                    <button onClick={() => {return this.pauseTimer}} disabled={!this.state.timing}>{this.state.paused?"Resume":"Pause"}</button>
                }
                <button onClick={()=>{return this.startTimer}} disabled={!this.state.timing}>Stop</button>
            </div>
        );
    }
}

export default Timer;