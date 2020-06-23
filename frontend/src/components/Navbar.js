import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
            currentUser: undefined
        };
    }
    
    componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
            this.setState({
                currentUser: user,
            });
        }
    }
    
    logOut() {
        AuthService.logout();
    }
    
    render() {
        const { currentUser} = this.state;

        return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Sportics
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/timer"} className="nav-link">
                            Interval Timer
                        </Link>
                    </li>
    
                    {currentUser && (
                        <li className="nav-item">
                        <Link to={"/workouts"} className="nav-link">
                            Workouts
                        </Link>
                        </li>
                    )}
                </div>
    
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={this.logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                    ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
        
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>
        </div>
        )
    }
}

export default Navbar;