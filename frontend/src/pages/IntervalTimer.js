import React, { Component } from 'react';
import Timer from '../components/Timer'

class IntervalTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 30,
            repetitions: 1
        }
    }

    handleChangeTime(evt) {
        const length = (evt.target.validity.valid) ? evt.target.value : this.state.length;
        this.setState({ length });
    }

    handleChangeReps(evt) {
        const repetitions = (evt.target.validity.valid) ? evt.target.value : this.state.repetitions;    
        this.setState({ repetitions });
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" pattern="[0-9]*" onChange={this.handleChangeTime.bind(this)} value={this.state.length} />
                    <input type="text" pattern="[0-9]*" onChange={this.handleChangeReps.bind(this)} value={this.state.repetitions} />
                </form>
                <Timer length={Number(this.state.length)} repetitions={Number(this.state.repetitions)}/>
            </div>
        );
    }
}

export default IntervalTimer;