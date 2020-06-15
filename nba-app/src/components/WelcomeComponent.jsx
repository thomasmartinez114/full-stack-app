import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/stats/HelloWorldService.js';
import NBAStats from '../images/nbastats.png';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.state = {
            welcomeMessage: ''
        }
        this.handleSuccessfulReponse = this.handleSuccessfulReponse.bind(this);
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome <b>{this.props.match.params.name}</b> to the NBA API.<br></br>
                    You can view NBA stats <Link to="/stats">here</Link>
                </div>
                {/* <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div> */}
                <br />
                <div className="container">
                    <img src={NBAStats} alt="NBA Stats Logo" className='statsLogo' />
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessfulReponse(response))
        // .catch()

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulReponse(response))
        // .catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulReponse(response))
        // .catch()
    }

    handleSuccessfulReponse(response) {
        console.log(response);
        this.setState({ welcomeMessage: response.data.message })
    }
}

export default WelcomeComponent;