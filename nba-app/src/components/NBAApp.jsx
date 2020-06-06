import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import StatsComponent from './StatsComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';

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
            </div>
        )
    }
}

export default NBAApp;