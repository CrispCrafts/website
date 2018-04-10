import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chip from '../../images/chip.png';
import CraftsSelector from 'components/CraftSelector';

export default class AppHeader extends Component {
  render() {
    const Wrapper = styled.div`
      padding: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;

    const Title = styled.div`
      font-size: 3em;
      font-weight: 900;
      color: #FFEB3B;
    `;

    const Logo = styled.img`
      width: 100%;
      max-width: 150px;
    `;

    return (
      <Wrapper>
        <Logo src={chip} />
        <Title>{this.props.appName}</Title>
        <CraftsSelector />
      </Wrapper>
    );
  }
}

AppHeader.propTypes = {
  children: PropTypes.node,
};

AppHeader.defaultProps = {
  appName: 'Crisp Crafts',
};
