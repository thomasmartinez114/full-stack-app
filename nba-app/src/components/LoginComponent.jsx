import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
import NBAStats from '../images/nbastats.png';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'tmartinez',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }


    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token); // the token comes from the response
                this.props.history.push(`/welcome/${this.state.username}`);
            }).catch(() => {
                this.setState({ showSuccessMessage: false });
                this.setState({ hasLoginFailed: true });
            })
    }

    render() {
        return (
            <div>
                {/* <h4>Login</h4> */}
                <br />
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}

                    {/* if this hasLoginFailed is true then return the Invalid Credentials */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" vale={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
                <br />
                <img src={NBAStats} alt="NBA Stats Logo" className='statsLogo' />
            </div>
        )
    }
}

export default LoginComponent;