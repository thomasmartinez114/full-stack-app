import React, { Component } from 'react';

class StatsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats:
                [
                    { id: 1, team: 'LAL', player: 'LeBron James', ppg: 27.0, allStar: true },
                    { id: 2, team: 'GSW', player: 'Steph Curry', ppg: 25.0, allStar: true },
                    { id: 3, team: 'BOS', player: 'Jayson Tatum', ppg: 18.0, allStar: true },
                    { id: 4, team: 'HOU', player: 'James Harden', ppg: 15.0, allStar: true }
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
                                <th>Rank</th>
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
                                        <tr key={stat.id}>
                                            <td>{stat.id}</td>
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

export default StatsComponent;