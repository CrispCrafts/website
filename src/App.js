import React, { Component } from 'react';
import logo from './chip.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CrispCrafts</h1>
        </header>
        <p className="App-intro">
          Site Coming Soon...
          <br/>
          <a href="http://colors.crispcrafts.com">color-picker</a>
          <br/>
          <a href="http://reactive-mirror.crispcrafts.com">reactive-mirror</a>
        </p>
      </div>
    );
  }
}

export default App;
