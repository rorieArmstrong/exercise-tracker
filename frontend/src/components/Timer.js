import React, { Component } from 'react';
import UIfx from 'uifx';
// import tickAudio from '../sounds/tick.mp3';
import finishAudio from '../sounds/end.mp3';

// const tick = new UIfx({asset: tickAudio});
const sound = new UIfx(finishAudio, {
    volume: 1.0,
});

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
        this.timer = 
            setInterval(() => {
                if(this.state.currentRep < this.state.repetitions) {
                    this.setState({currentTime: this.state.currentTime-1})
                    // tick.play()
                    if(this.state.currentTime === 0){
                        sound.play()
                        this.setState({
                            currentRep: this.state.currentRep + 1,
                            currentTime: this.state.length
                        })
                    }
                }else {
                    this.resetTimer()
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
            paused: false
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
                <h3>timer: {this.state.currentTime}</h3>
                {!this.state.timing?
                    <button onClick={this.startTimer} disabled={this.state.timing}>Start</button>:
                    <button onClick={this.pauseTimer} disabled={!this.state.timing}>{this.state.paused?"Resume":"Pause"}</button>
                }
                <button onClick={this.resetTimer} disabled={!this.state.timing}>Stop</button>
            </div>
        );
    }
}

export default Timer;