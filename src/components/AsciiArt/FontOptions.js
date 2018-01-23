import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import ColorField from '../ColorPicker/ColorField';
import './AsciiArt';
import fonts, {defaultSizes, layoutOptions} from './utils/figlet-fonts';

export default class FontOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openBackgroundColor: false,
            openFontColor: false,
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    generateDropDown(type) {
        switch(type) {
            case 'FONT':
                return fonts.map((font, indx) => {
                    return (
                        <MenuItem key={`${indx}${font}`} value={indx} primaryText={font} />
                    );
                });
                break;
            case 'SIZE':
                return defaultSizes.map((size) => {
                    return (
                        <MenuItem key={size} value={size} primaryText={`${size}px`} />
                    );
                });
            case 'HLAYOUT':
            case 'VLAYOUT':
                return layoutOptions.map((option) => {
                    return (
                        <MenuItem key={option} value={option.toLowerCase()} primaryText={option} />
                    );
                });
        }
    }

    handleOptionChange(type, value) {
        this.props.onOptionChange({type, value});
    }

    render() {
        return (
            <div className="font-options">
                <div className="font-option">
                    <SelectField
                        autoWidth
                        style={{maxWidth: '150px'}}
                        value={this.props.font}
                        floatingLabelText="Font"
                        onChange={(event, index, value) => {
                            this.handleOptionChange('FONT', value);
                        }}
                    >
                        {this.generateDropDown('FONT')}
                    </SelectField>
                </div>
                <div className="font-option">
                    <SelectField
                        autoWidth
                        style={{maxWidth: '100px'}}
                        value={this.props.fontSize}
                        floatingLabelText="Font Size"
                        onChange={(event, index, value) => {
                            this.handleOptionChange('SIZE', value);
                        }}
                    >
                        {this.generateDropDown('SIZE')}
                    </SelectField>
                </div>
                <div className="font-option">
                    <SelectField
                        autoWidth
                        style={{maxWidth: '175px'}}
                        value={this.props.hLayout}
                        floatingLabelText="Horizontal Layout"
                        onChange={(event, index, value) => {
                            this.handleOptionChange('HLAYOUT', value);
                        }}
                    >
                        {this.generateDropDown('HLAYOUT')}
                    </SelectField>
                </div>
                <div className="font-option">
                    <SelectField
                        autoWidth
                        style={{maxWidth: '175px'}}
                        value={this.props.vLayout}
                        floatingLabelText="Vertical Layout"
                        onChange={(event, index, value) => {
                            this.handleOptionChange('VLAYOUT', value);
                        }}
                    >
                        {this.generateDropDown('VLAYOUT')}
                    </SelectField>
                </div>
                <div className="font-option">
                    <i className="material-icons" style={{color: this.props.fontColor}}>brightness_1</i>
                    <ColorField
                        floatingLabelText="Font Color"
                        value={this.props.fontColor}
                        onChange={(newVal) => {
                            this.handleOptionChange('FCOLOR', newVal);
                        }}
                    />
                </div>
                <div className="font-option">
                    <i className="material-icons" style={{color: this.props.backgroundColor}}>brightness_1</i>
                    <ColorField
                        floatingLabelText="Background Color"
                        value={this.props.backgroundColor}
                        onChange={(newVal) => {
                            this.handleOptionChange('BCOLOR', newVal);
                        }}
                    />
                </div>
            </div>
        );
    }
}

FontOptions.defaultProps = {
    font: 0,
    backgroundColor: '#fff',

};