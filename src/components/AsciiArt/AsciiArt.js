import React, { Component } from 'react';
import './AsciiArt.css';
import SearchBar from '../SearchBar/SearchBar';
import figlet from 'figlet';
import Figlet from './Figlet';
import FontOptions from './FontOptions';
import asyncFiglet from './utils/async-figlet';
import fonts from './utils/figlet-fonts';

class AsciiArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textValue: '',
        figletText: '',
        font: 0,
        hLayout: 'default',
        vLayout: 'default',
        fontSize: 18,
        fontColor: '#e61f1f',
        backgroundColor: '#fbfbfb',
        editorFocused: false,
        boldFont: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFigletTextChange = this.handleFigletTextChange.bind(this);
  }

  handleFigletTextChange(str) {
    this.setState({
        textValue: str
    }, () => {    
        this.updateFiglet(this.state.textValue);
    });
  }

  handleOptionChange({type, value}) {
      switch(type) {
        case 'FONT':
            this.setState({
                font: value,
            }, () => {
                this.updateFiglet(this.state.textValue);
            });
            break;
        case 'SIZE':
            this.setState({
                fontSize: value,
            });
            break;
        case 'HLAYOUT':
            this.setState({
                hLayout: value
            }, () => {
                this.updateFiglet(this.state.textValue);
            });
            break;
        case 'VLAYOUT':
            this.setState({
                vLayout: value
            }, ()=> {
                this.updateFiglet(this.state.textValue);
            });
            break;
        case 'FCOLOR':
            this.setState({
                fontColor: value
            });
            break;
        case 'BCOLOR':
            this.setState({
                backgroundColor: value
            });
            break;
      }
  }

  updateFiglet(str) {
      const options = {
        font: fonts[this.state.font],
        horizontalLayout: this.state.hLayout,
        verticalLayout: this.state.vLayout
      };

      asyncFiglet(str, options)
        .then(asciiText => {
            this.setState({
                figletText: asciiText
            });
        }).catch(err => {
            console.log(err);
        });
  }

  render() {
    return (
      <div className="ascii-container" ref={(d) => { this.scrollContainer = d; }}>
        <div className="input-section"
            style={{
                zIndex: 10,
                boxShadow: '0 1px 0px 1px rgba(0, 0, 0, 0.2)'
            }}>
            <SearchBar
                useTextArea
                leftIconName="format_size"
                placeholder="Text to Ascii Art"
                spellCheck="false"
                value={this.state.textValue}
                onChange={this.handleFigletTextChange}
                onFocus={(focused) => {
                    this.setState({
                        editorFocused: focused
                    });
                }}
            />
        </div>
        <div className="fig-container" style={{
            height: `calc(100vh - 154px)`,
            display: this.state.figletText.trim() ? '' : 'flex',
            flexDirection: 'column',
            backgroundColor: this.state.backgroundColor,
            paddingTop: `${this.state.editorFocused ? 184 : 64}px`
        }}>
            <FontOptions
                font={this.state.font}
                fontSize={this.state.fontSize}
                fontColor={this.state.fontColor}
                backgroundColor={this.state.backgroundColor}
                hLayout={this.state.hLayout}
                vLayout={this.state.vLayout}
                onOptionChange={this.handleOptionChange}
            />
            <Figlet
                figletText={this.state.figletText}
                //backgroundColor={this.state.backgroundColor}
                fontSize={this.state.fontSize}
                fontColor={this.state.fontColor}
                boldFont={this.state.boldFont}
            />
        </div>
      </div>
    );
  }
}

export default AsciiArt;