import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import React, { Component } from 'react';
import IntervalTimer from './pages/IntervalTimer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			userID: null,
			signUp: false,
		}
		
	}
	
	render() {
		if(this.state.loggedIn){
			return (
				<div>
					<Navbar/>
					<Router>
						<Switch>
							<Route path='/' exact render={props => (
								<Homepage {...props}
									userID={this.state.userID}
								/>)} />
							<Route path='/timer'  render={props => (
								<IntervalTimer {...props}
									userID={this.state.userID}
								/>)} />
							<Route/>
						</Switch>
					</Router>
				</div>
			);
		}else if(this.state.signUp){
			return (
				<div>
					<Navbar loggedIn={false}/>
					<SignUp/>
				</div>
			)
		}else{
			return (
				<div>
					<Navbar loggedIn={false}/>
				</div>
			)
		}
	}
}

export default App;