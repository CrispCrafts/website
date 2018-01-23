import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.generateIcons = this.generateIcons.bind(this);
    }

    generateIcons() {
        if(this.props.icons.length > 0) {
            return this.props.icons.map((icon, indx) => {
                return (
                    <i key={`${indx}${icon}`} className="material-icons">{icon}</i>
                );
            })
        }
        return (
            <i className="material-icons">{this.props.icon}</i>
        );
    }
    


    render() {
        var selectedStyle = {
            transition: 'all ease-in 200ms',
            color: this.props.selected ? '#fff' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer',
            transform: this.props.selected ? 'scale(1.3)' : ''
        };
        return (
            <div className="item" style={selectedStyle} onClick={() => {
                this.props.onSelect(this.props.value);
            }}>
                <div className="icon-container">
                    {this.generateIcons()}
                </div>
                <div className="item-title">{this.props.title}</div>
            </div>
        );
    }
}

Item.defaultProps = {
    value: 0,
    icon: 'keyboard',
    title: 'hello_world',
    showTitle: true,
    icons: []
};

export default Item;