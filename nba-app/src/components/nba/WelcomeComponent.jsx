import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

export default WelcomeComponent;