import React, { Component } from "react";

import UserService from "../services/user.service";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
        response => {
            this.setState({
            content: response.data
            });
        },
        error => {
            this.setState({
            content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
        }
        );
    }

    render() {
        return (
        <div className="container">
            <header className="jumbotron">
                <h3>{this.state.content}</h3>
            </header>
            <article>
                <h3>
                    Test
                </h3>
            </article>
        </div>
        );
    }
}

export default Homepage;