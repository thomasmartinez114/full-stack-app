import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class NBAApp extends Component {
    render() {
        return (
            <div className="NBAApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/stats" component={StatsComponent} />
                        <Route path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>

                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-info">
                    <div><a href="https://stats.nba.com/" target="_blank" className="navbar-brand">nbastats</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/nbastats">Home</Link></li>
                        <li><Link className="nav-link" to="/stats">Stats</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span>All Rights Reserved 2020 @thomasmartinez1492</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h3>You are logged out</h3>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </>
        )
    }
}

class StatsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats:
                [
                    { team: 'LAL', player: 'LeBron James', ppg: 20.0, allStar: true },
                    { team: 'GSW', player: 'Steph Curry', ppg: 25.0, allStar: true },
                    { team: 'BOS', player: 'Jayson Tatum', ppg: 18.0, allStar: true }
                ]
        }
    }

    render() {
        return (
            <div>
                <h4>More NBA Statistics coming soon. . . .</h4>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Player</th>
                                <th>PPG</th>
                                <th>All-Star Selection</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stats.map(
                                    stat =>
                                        <tr>
                                            <td>{stat.team}</td>
                                            <td>{stat.player}</td>
                                            <td>{stat.ppg}</td>
                                            <td>{stat.allStar.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome <b>{this.props.match.params.name}</b> to the NBA API.<br></br>
                    You can view NBA stats <Link to="/stats">here</Link>
                </div>
            </>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred.  Contact support at (555) 555-5555</div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'tmartinez',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({ username: event.target.value }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({ password: event.target.value })
    // }

    loginClicked() {
        //tmartinez, dummy
        if (this.state.username === 'tmartinez' && this.state.password === 'dummy') {
            // Session storage on browser for logging in
            AuthenticationService.registerSuccessfulLogin();
            this.props.history.push(`/welcome/${this.state.username}`);
            // console.log('Login Successful');
            // this.setState({ showSuccessMessage: true });
            // this.setState({ hasLoginFailed: false });
        }
        else {
            // console.log('Login Failed');
            this.setState({ showSuccessMessage: false });
            this.setState({ hasLoginFailed: true });

        }
    }

    render() {
        return (
            <div>
                <h4>Login</h4>
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
            </div>
        )
    }
}

function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null;
}

export default NBAApp;