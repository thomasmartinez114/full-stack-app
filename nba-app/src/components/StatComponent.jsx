import React, { Component } from 'react';

class StatComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            firstName: 'Larry',
            lastName: 'Bird',
            ppg: 30
        }
    }

    render() {
        return <div>Stat Component for id - {this.props.match.params.id}</div>
    }
}

export default StatComponent;