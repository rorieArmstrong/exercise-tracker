import React, { Component } from 'react';

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }
    
    showDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <div className='workout'>
                <div>
                    <h4>{this.props.data.name}</h4>
                    <button>Start</button>
                </div>
                <div>
                    <p>Last Completed: {this.props.data.lastUpadted}</p>
                    <p>Completed: {this.props.data.completed}</p>
                </div>
                <div>
                    {this.state.showDetails && this.props.data.exercises.map(exercise => {
                        return (<div>
                            <h4>{exercise.name}</h4>
                            <h5>{exercise.group}</h5>
                            <h5>{exercise.sets}</h5>
                            <h5>{exercise.reps}</h5>
                            <h5>{exercise.weight}</h5>
                        </div>)
                    })}
                    <button onClick={() => {this.showDetails()}}>More Info</button>
                </div>
            </div>
        );
    }
}

export default Workout;