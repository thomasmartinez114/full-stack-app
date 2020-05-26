import React, { Component } from 'react';

class NBAApp extends Component {
    render() {
        return (
            <div className="NBAApp">
                NBA API
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'tmartinez',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({ username: event.target.value }
        )
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                Password: <input type="password" name="password" vale={this.state.password} onChange={this.handlePasswordChange} />
                <button>Login</button>
            </div>
        )
    }
}

export default NBAApp;