import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import Workout from '../components/Workout'

class Workouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            workouts: [{name:'test1', id:1, exercises:[{name:'pull ups', group:'back', sets:10, reps:10}]},{name:'test2', id:2, exercises:[]}]
        }
    }
    
    /* A page to see workouts displayed in a table and link to create a new workout*/

    getUserWorkouts = () => {
        return
    }

    componentDidMount() {
        this.getUserWorkouts()
    }

    render() {
        return (
            <div>
                <header>
                    <h3>Workouts</h3>
                    <Link to='/create'>
                        <button>Add a new Workout</button>
                    </Link>
                </header>
                <div className='workouts'>
                    {this.state.workouts.map(workout => {
                        return (
                            <div key={workout.id}>
                                <Workout data={workout} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Workouts;