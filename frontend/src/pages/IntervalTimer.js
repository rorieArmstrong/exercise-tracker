import React, { Component } from 'react';
import Timer from '../components/Timer'

class IntervalTimer extends Component {
    render() {
        return (
            <div>
                <form>
                    <input></input>
                    <input></input>
                </form>
                <Timer/>
            </div>
        );
    }
}

export default IntervalTimer;