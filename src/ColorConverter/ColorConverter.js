import React, { Component } from 'react';
import './ColorConverter.css';
import { validateHexColor, validateRgbColor, hexToRgb, rgbToHex, rgbToString } from '../core/index';

class ColorConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgb: '',
            hex: '',
        }
        this.handleHEXChange = this.handleHEXChange.bind(this);
        this.handleRGBChange = this.handleRGBChange.bind(this);
    }

    handleHEXChange(event) {
        var val = event.target.value;
        var valid = validateHexColor(val);
        console.log(val, valid);
        this.setState({
            hex: val,
            rgb: '',
            validHex: valid,
            validRgb: false
        });
    }

    handleRGBChange(event) {
        var val = event.target.value;
        console.log(val);
        var valid = validateRgbColor(val);
        this.setState({
            rgb: event.target.value,
            hex: '',
            validRgb: valid,
            validHex: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.validRgb !== this.state.validRgb ||
           prevState.validHex !== this.state.validHex ||
           prevState.rgb !== this.state.rgb ||
           prevState.hex !== this.state.hex) {
            this.onValidColorChange();
        }
    }

    onValidColorChange(color) {
        if(this.state.validRgb) {
            var h = rgbToHex(this.state.rgb);
            this.setState({
                hex: h,
            });
            this.props.onColorChanged(h);
        } else if (this.state.validHex) {
            var rgbString = rgbToString(hexToRgb(this.state.hex));
            console.log(rgbString);
            this.setState({
                rgb: rgbString,
            });
            this.props.onColorChanged(this.state.hex);
        } else {
            this.props.onColorChanged();
        }
    }

    render () {
        return(
            <div className="container">
                <input
                    spellCheck="false"
                    type="text"
                    placeholder="#HEX"
                    value={this.state.hex}
                    onChange={this.handleHEXChange} />
                <input
                    spellCheck="false"
                    type="text"
                    placeholder="(R,G,B)"
                    value={this.state.rgb}
                    onChange={this.handleRGBChange} />
            </div>
        );
    }
}

export default ColorConverter;