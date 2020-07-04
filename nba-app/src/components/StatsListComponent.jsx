import React, { Component } from 'react';
import NbaDataService from '../api/stats/NbaDataService.js';
// import AuthenticationService from './AuthenticationService.js';

class StatsComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            stats: [],
            message: null
        }
        this.deleteNbaClicked = this.deleteNbaClicked.bind(this);
        this.updateNbaClicked = this.updateNbaClicked.bind(this);
        this.refreshStats = this.refreshStats.bind(this);
        this.addNbaClicked = this.addNbaClicked.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshStats();
        console.log(this.state)
    }

    refreshStats() {
        // let username = AuthenticationService.getLoggedInUserName();
        NbaDataService.retrieveAllNba()
            .then(
                response => {
                    // console.log(response);
                    this.setState({ stats: response.data })
                }
            )
    }

    deleteNbaClicked(id) {
        // console.log("ID: " + id);
        NbaDataService.deleteNba(id)
            .then(
                response => {
                    this.setState({ message: `Delete of stat ${id} successful!` });
                    this.refreshStats(); // Only refresh on successful response
                }
            )
    }

    updateNbaClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/nba/stats/${id}`)
        // /nba/stats/${id}
    }

    addNbaClicked() {
        this.props.history.push(`/nba/stats/-1`)
    }

    render() {
        console.log('render')
        return (
            <div>
                <br />
                <h4>More Stats coming soon. . . .</h4>
                <br />
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Position</th>
                                <th>Team</th>
                                <th>PPG</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-success" onClick={() => this.updateNbaClicked(stat.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteNbaClicked(stat.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addNbaClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatsComponent;