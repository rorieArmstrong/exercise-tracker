import React, { Component } from 'react';

/*
A component to input an name of exercise, muscle group, how many reps, how many sets and ability to add to a workout.
Will then post the exercise to the database in the exercises table.
*/

class ExerciseCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            group: "",
            rep: null,
            set: null,
        }
    }

    handleChangeSets(evt) {
        const set = (evt.target.validity.valid) ? evt.target.value : this.state.set;
        
        this.setState({ set });
    }

    handleChangeReps(evt) {
        const reps = (evt.target.validity.valid) ? evt.target.value : this.state.reps;
        
        this.setState({ reps });
    }
    
    render() {
        return (
            <div>
                <form method="POST">
                    <input type="text" />
                    <select >
                        <option value="Arms">Arms</option>
                        <option value="Back">Back</option>
                        <option value="Chest">Chest</option>
                        <option value="Core">Core</option>                                                                        
                        <option value="Legs">Legs</option>
                        <option value="Shouldrs">Shoulders</option>
                    </select>
                    <input type="text" pattern="[0-9]*" onInput={this.handleChangeSets.bind(this)} value={this.state.set} />
                    <input type="text" pattern="[0-9]*" onInput={this.handleChangeReps.bind(this)} value={this.state.rep} />
                </form>
            </div>
        );
    }
}

export default ExerciseCreate;