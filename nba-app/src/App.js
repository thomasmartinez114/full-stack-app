import React, { Component } from 'react';
import FirstComponent, {SecondComponent} from './components/learning-components/FirstComponent';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World  
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

function ThirdComponent() {
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  )
}

export default App;