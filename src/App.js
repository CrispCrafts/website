import React, { Component } from 'react';
import './App.css';
import ColorConverter from './ColorConverter/ColorConverter';
import AppToolbar from './AppToolbar/AppToolbar';
import AppFooter from './AppFooter/AppFooter';
import { getTextColor, hexToString } from './core/index';
import Nav from './Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      defaultColor: '#E53935',
      textColor: getTextColor('#E53935'),
      animationSpeed: '100ms'
    };
  }

  render() {
    return (
      <div className="App" style={{ color: this.state.textColor }}>
        <div className="app-container" style={{ backgroundColor: this.state.color || this.state.defaultColor, transition: `all ${this.state.animationSpeed} ease-out` }}>
          <AppToolbar title="Color"/>
          <ColorConverter onColorChanged={(c) => {
            if(!c) {
              this.setState({
                color: this.state.defaultColor,
                textColor: getTextColor(this.state.defaultColor)
              });
              return;
            }

            this.setState({
              color: hexToString(c),
              textColor: getTextColor(c)
            });
          }}/>
          <Nav />
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;
