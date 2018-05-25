import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding-top: 70px;
  background: #E53935;
`;

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.log("WHAT");
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default withRouter(ScrollToTop);
