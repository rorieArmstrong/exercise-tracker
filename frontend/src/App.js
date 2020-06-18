import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Homepage from './pages/Homepage'

function App() {
    return (
        <div className="App">
			<Router>
				<Switch>
					<Route path='/' exact component={Homepage} />
				</Switch>
			</Router>
        </div>
    );
}

export default App;
