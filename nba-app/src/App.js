import React, { Component } from 'react';
import NBAApp from './components/NBAApp';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NBAApp />
      </div>
    );
  }
}

export default App;