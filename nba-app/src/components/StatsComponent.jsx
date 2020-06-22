import React, { Component } from 'react';
import NbaDataService from '../api/stats/NbaDataService.js';
// import AuthenticationService from './AuthenticationService.js';

class StatsComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            stats:
                [
                    // { id: 1, team: 'LAL', player: 'LeBron James', ppg: 27.0, allStar: true },
                    // { id: 2, team: 'GSW', player: 'Steph Curry', ppg: 25.0, allStar: true },
                    // { id: 3, team: 'BOS', player: 'Jayson Tatum', ppg: 18.0, allStar: true },
                    // { id: 4, team: 'HOU', player: 'James Harden', ppg: 15.0, allStar: true }
                ]
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        return false; // even if state is update do not do render
        // return true; // will return the render if update
    }

    componentDidMount() {
        console.log('componentDidMount')
        // let username = AuthenticationService.getLoggedInUserName();
        NbaDataService.retrieveAllNba()
            .then(
                response => {
                    // console.log(response);
                    this.setState({ stats: response.data })
                }
            )
    }

    render() {
        console.log('render')
        return (
            <div>
                <h4>More NBA Statistics coming soon. . . .</h4>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Position</th>
                                <th>Team</th>
                                <th>PPG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stats.map(
                                    stat =>
                                        <tr key={stat.id}>
                                            <td>{stat.firstName}</td>
                                            <td>{stat.lastName}</td>
                                            <td>{stat.position}</td>
                                            <td>{stat.team}</td>
                                            <td>{stat.pointsPerGame}</td>
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

export default StatsComponent;