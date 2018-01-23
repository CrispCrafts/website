import React, { Component } from 'react';
import cool from 'cool-ascii-faces';
import './AsciiCodes.css';
import AsciiCode from './AsciiCode';
import SearchBar from '../SearchBar/SearchBar';
import codes from './core';
import he from 'he';

class AsciiCodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
    };
    this.handleAsciiChange = this.handleAsciiChange.bind(this);
    this.generateGrid = this.generateGrid.bind(this);
  }

  generateGrid(codes) {
    if(codes) {
        return codes.map((key, indx) => {
            return (
                <AsciiCode key={`${indx}${key}`} character={indx === 0 ? key : he.decode(key)}/>
            );
        });
    }
    var set = Array.from(new Set(this.state.query.split('')).values());
    return set.map((x, indx) => {
        return (
            <AsciiCode key={`${indx}${x}`} character={x} />
        );
    });
  }

  handleAsciiChange(str) {
    this.setState({
        query: str
    });
  }

  render() {
    var grid;
    if(this.state.query.length>0){
        grid = (
            <div className="ascii-grid">
                {this.generateGrid()}
            </div>
        );
    } else {
        grid = (
            <div className="ascii-grid">
                {this.generateGrid(codes)}
            </div>
        );
    }
    return (
      <div className="ascii-container" ref={(d) => { this.scrollContainer = d; }}>
        <div className="input-section"
            style={{
                zIndex: 10,
                boxShadow: '0 1px 0px 1px rgba(0, 0, 0, 0.2)'
            }}>
            <SearchBar
                placeholder="Type in a character"
                spellCheck="false"
                value={this.state.query}
                onChange={this.handleAsciiChange}
            />
        </div>
        <div className="grid-container">
            {grid}
        </div>
      </div>
    );
  }
}

/**
 * 
<div>{cool()}</div>
<br/>
<div>Ascii Codes</div>
<span style={{color: 'rgba(255,255,255,0.5)'}}>Type in a character</span>
 */

export default AsciiCodes;