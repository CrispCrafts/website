import React, { Component } from 'react';
import styled from 'styled-components';
import chip from 'images/crumbs.png';
import CraftsSelector from 'components/CraftSelector';
// import LoadingIndicator from 'components/LoadingIndicator';

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
        <CraftsSelector
          categories={this.props.categories}
          category={this.props.category}
          onChangeCategory={this.props.onChangeCategory}/>
      </Wrapper>
    );
  }
}

AppHeader.defaultProps = {
  loadingCategories: true,
  appName: 'Crisp Crafts',
  category: 'All',
  categories: [],
};
