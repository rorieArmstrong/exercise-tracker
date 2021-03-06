import React, { Component } from 'react';
import UIfx from 'uifx';
import finishAudio from '../sounds/finish.mp3';
import setAudio from '../sounds/set.mp3';
import '../styles/timer.css'

const sound = new UIfx(setAudio, {
    volume: 1.0,
});

const finish = new UIfx(finishAudio, {
    volume: 1.0
})

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: this.props.length,
            repetitions: this.props.repetitions,
            currentTime: this.props.length,
            currentRep: 0,
            timing: false,
            paused: true
        }
    }

    startTimer = async () => {
        this.setState({timing: true, paused: false})
        console.log("start")
        this.timer = 
            setInterval(() => {
                if(this.state.currentRep < this.state.repetitions) {
                    this.setState({currentTime: this.state.currentTime-1})
                    if(this.state.currentTime === 0){
                        sound.play()
                        this.setState({
                            currentRep: this.state.currentRep + 1,
                            currentTime: this.state.length
                        })
                    }
                }else {
                    this.resetTimer()
                    finish.play()
                }
            }, 1000)
    }

    pauseTimer = () => {
        if(!this.state.paused){
            this.setState({paused: true})
            clearInterval(this.timer)
            console.log("paused")
        }else{
            this.setState({paused: false})
            this.startTimer()
            console.log("resumed")
        }
    }

    resetTimer = () => {
        clearInterval(this.timer)
        this.setState({
            currentRep: 0,
            currentTime: this.state.length,
            timing: false,
            paused: true
        })
        console.log("reset")
    }

    componentDidUpdate(prevProps) {
        if(this.props.length !== prevProps.length || this.props.repetitions !== prevProps.repetitions)
            {this.setState({
                length: this.props.length,
                repetitions: this.props.repetitions,
                currentTime: this.props.length,
            })}
    }

    render() {
        return (
            <div className="timer">
                <div id='countdown'>
                    <h3 id='countdown-number'>{this.state.currentTime}</h3>
                    <svg>
                        <circle 
                            r="18" cx="20" cy="20"
                            style={{
                                animation: `countdown ${this.state.length}s linear infinite forwards`,
                                "animation-play-state": this.state.paused ? "paused" : "",
                            }}
                            ></circle>
                    </svg>
                </div>
                <div className='buttons'>
                    {!this.state.timing?
                        <button onClick={this.startTimer} disabled={this.state.timing}>Start</button>:
                        <button onClick={this.pauseTimer} disabled={!this.state.timing}>{this.state.paused?"Resume":"Pause"}</button>
                    }
                    <button onClick={this.resetTimer} disabled={!this.state.timing}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Timer;