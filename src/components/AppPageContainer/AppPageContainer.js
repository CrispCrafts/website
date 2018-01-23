import React, { Component } from 'react';
import './AppPageContainer.css';


class AppPageContainer extends Component {
    constructor(props) {
        super(props);
        this.generateView = this.generateView.bind(this);
    }

    generateView() {
        return React.Children.toArray(this.props.children)
            .filter(child => child.props.value === this.props.value);
    }

    render() {
        return (
            <div className="page-container">
                {this.generateView()}
            </div>
        );
    }
}

AppPageContainer.defaultProps = {
    value: 0
};

export default AppPageContainer;
