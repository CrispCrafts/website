import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class NavItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      showItems: true,
    };
  }

  render() {
    const Wrapper = styled.div`
      padding: 0;
      display: flex;
      flex-direction: row;
      @media (max-width: 700px) {
        display: none;
      }
    `;

    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

NavItems.propTypes = {
  children: PropTypes.node,
};
