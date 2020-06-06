import React, { Component } from 'react';
import NBAApp from './components/nba/NBAApp';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <NBAApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello World
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     );
//   }
// }


export default App;