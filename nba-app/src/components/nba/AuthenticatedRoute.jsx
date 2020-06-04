import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            <Route {...this.props} /> // spread operator
        } else {
            <Redirect to="/login" />
        }
    }
}