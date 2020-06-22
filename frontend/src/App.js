import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import IntervalTimer from './pages/IntervalTimer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

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
		return (
			<div>
				<Navbar/>
				<Router>
					<Switch>
						<Route path='/' exact component={Homepage} />
						<Route path='/timer'  component={IntervalTimer} />
						<Route path='/login'  component={Login} />
						<Route path='/register'  component={SignUp} />
						<Route path='/account'  component={Account} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;