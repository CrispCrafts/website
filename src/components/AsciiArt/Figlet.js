import React, { Component } from 'react';
import cool from 'cool-ascii-faces';

export default class Figlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            face: cool()
        };
        //this.generateLineNumbers = this.generateLineNumbers.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(
            (nextProps.figletText && nextProps.figletText.trim()) ||
            (this.props.figletText.trim() && this.props.figletText !== nextProps.figletText) ||
            nextProps.figletText !== this.props.figletText ||
            nextProps.fontWeight !== this.props.fontWeight ||
            nextProps.fontSize !== this.props.fontSize ||
            nextProps.fontColor !== this.props.fontColor ||
            nextProps.backgroundColor !== this.props.backgroundColor
        ) {
            return true;
        }
        return false;
    }

/*    generateLineNumbers(str) {
        var lineNumber = 0;
        return str.replace(/^/gm, () => {
            return (
                <span className="line-number-position">
                    <span className="line-number">{this.lineNubmer++}</span>
                </span>
            );
        });
    }
*/
    render() {
        const { figletText } = this.props;
        if(!figletText.trim()) {
            return (
                <div style={{
                    fontSize: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    color: this.props.fontColor,
                    flex: 1
                }}>
                    <div style={{paddingBottom: '24px'}}>{this.state.face}</div>
                    <div>Convert Text to Ascii Art</div>
                    <div style={{color: 'rgba(0, 0, 0, 0.5)'}}> Type in any character</div>
                </div>
            );
        }
        return (
            <div>
                <pre
                    style={{
                        padding: '24px',
                        margin: '0px',
                        width: 'fit-content',
                        fontSize: `${this.props.fontSize}px`,
                        fontWeight: this.props.fontWeight || 'normal',
                        color: this.props.fontColor
                    }}>
                    <code>{figletText}</code>
                </pre>
            </div>
        );
    }
}