import React, { Component } from 'react';
import './App.css';
import HTMLCodes from './components/HTMLCodes/HTMLCodes';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppFooter from './components/AppFooter/AppFooter';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AppToolbar title="Characters"/>
        <HTMLCodes></HTMLCodes>
        <AppFooter />
      </div>
    );
  }
}

export default App;
