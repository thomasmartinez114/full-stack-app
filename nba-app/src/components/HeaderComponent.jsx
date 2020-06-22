import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';
import NBALogo from '../images/NBA-icon.png';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <ul className="navbar-nav">
                        <div><img src={NBALogo} alt="NBA Logo" className="logo" /></div>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/nbastats">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="nba/stats">Stats</Link></li>}
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

export default withRouter(HeaderComponent);