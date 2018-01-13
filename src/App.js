import React, { Component } from 'react';
import './App.css';
import ColorConverter from './ColorConverter/ColorConverter';
import { getTextColor, hexToString } from './core/index';

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
      <div className="App" style={{background: this.state.color || this.state.defaultColor, color: this.state.textColor, transition: `all ${this.state.animationSpeed} ease-out`}}>
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
          })
        }}/>
      </div>
    );
  }
}

export default App;
