import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import chip from '../../images/crumbs.png';
import CraftsSelector from 'components/CraftSelector';

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

export default class AppHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={chip} />
        <Title>{this.props.appName}</Title>
        <CraftsSelector category={this.props.category} onChangeCategory={this.props.onChangeCategory}/>
      </Wrapper>
    );
  }
}

AppHeader.propTypes = {
  children: PropTypes.node,
  category: PropTypes.string
};

AppHeader.defaultProps = {
  appName: 'Crisp Crafts',
  category: 'All',
};
