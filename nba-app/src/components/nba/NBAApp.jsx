import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import StatsComponent from './StatsComponent.jsx';

class NBAApp extends Component {
    render() {
        return (
            <div className="NBAApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/stats" component={StatsComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
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
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <div><a href="https://stats.nba.com/" className="navbar-brand">nbastats</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/nbastats">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/stats">Stats</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
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