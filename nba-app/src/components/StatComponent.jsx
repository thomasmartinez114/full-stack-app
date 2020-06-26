import React, { Component } from 'react';

class StatComponent extends Component {
    render() {
        return <div>Stat Component for id - {this.props.match.params.id}</div>
    }
}

export default StatComponent;