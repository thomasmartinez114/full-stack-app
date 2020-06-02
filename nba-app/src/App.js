import React, { Component } from 'react';
// import FirstComponent from './components/learning-components/FirstComponent';
// import SecondComponent from './components/learning-components/SecondComponent';
// import ThirdComponent from './components/learning-components/ThirdComponent';
import NBAApp from './components/nba/NBAApp';
// import Counter from './components/counter/Counter';
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