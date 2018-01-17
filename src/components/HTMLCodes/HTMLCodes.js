import React, { Component } from "react";
import './HTMLCodes.css';
import keyCodes from './keycodes';
import Key from '../Key/Key';

class HTMLCodes extends Component {
    
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
                <div style={{color: 'white', fontSize: '20px'}}>Press any Key</div>
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

export default HTMLCodes;