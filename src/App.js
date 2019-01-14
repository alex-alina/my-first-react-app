import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Title content="Just a simple light switch" />
          <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;
