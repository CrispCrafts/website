import React, { Component } from "react";
import cool from 'cool-ascii-faces';
import './KeyCodes.css';
import keyCodes from './core';
import Key from '../Key/Key';

class KeyCodes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            which: null,
            keyCode: null,
            shiftKey: null,
            altKey: null,
            ctrlKey: null,
            metaKey: null
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress, false);
    }

    handleKeyPress(e) {
        e.preventDefault();
        if(e.which !== this.state.which ||
            e.keyCode !== this.state.keyCode ||
            e.shiftKey !== this.state.shiftKey ||
            e.altKey !== this.state.altKey ||
            e.ctrlKey !== this.state.ctrlKey ||
            e.metaKey !== this.state.metaKey
        ) {
            this.setState({
                ...keyCodes(e),
                started: true
            });
        }
    }
    
    render() {
        if(!this.state.started) {
            return (
                <div className="htmlCodes-container" style={{color: 'white', fontSize: '24px'}}>
                    <div style={{paddingBottom: '24px'}}>{cool()}</div>
                    <div>Key Codes</div>
                    <span style={{color: 'rgba(255,255,255,0.5)'}}>Press any Key</span>
                </div>
            );
        }
        return (
            <div className="htmlCodes-container">
                <Key
                    info={{
                        name: this.state.key,
                        keyCode: this.state.which,
                        shiftKey: this.state.shiftKey,
                        altKey: this.state.altKey,
                        ctrlKey: this.state.ctrlKey,
                        metaKey: this.state.metaKey
                    }}
                />
            </div>
        );
    }
}

export default KeyCodes;