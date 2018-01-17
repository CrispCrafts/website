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
          <div style={{textAlign: 'left', marginLeft: '30px'}}>
            <h1><a href="https://colors.crispcrafts.com">colors</a></h1>
            <p>A set of color tools</p>
            <h1><a href="https://characters.crispcrafts.com">characters</a></h1>
            <p>A set of character tools</p>
            <h1><a href="https://github.com/cristian006/ReactiveMirror">reactive-mirror</a></h1>
            <p>A modular react + electron app meant to run on Raspberry Pi 3 for a DIY Smart Mirror</p>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
