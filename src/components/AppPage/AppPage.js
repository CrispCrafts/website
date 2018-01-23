import React, { Component } from 'react';
import './AppPage.css';

class AppPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pageContainer">
        {this.props.children}
      </div>
    );
  }
}

AppPage.defaultProps = {
  value: 0,
};

export default AppPage;
