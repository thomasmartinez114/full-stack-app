import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/stats/HelloWorldService.js';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome <b>{this.props.match.params.name}</b> to the NBA API.<br></br>
                    You can view NBA stats <Link to="/stats">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => console.log(response))
        // .catch()
    }
}

export default WelcomeComponent;