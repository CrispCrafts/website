import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
// import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      width: 100%;
      min-height: 100%;
      background: #E53935;
    `;

    const Grid = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      margin: 0 auto;
      flex-wrap: wrap;
      max-width: 1020px;
      min-height: calc(100vh-100px);
      margin-top: 24px;
    `;


    return (
      <Wrapper>
        <AppHeader />
        <Grid>
          {this.props.children.filter(x => x.category === this.props.selectedCategory).map(this.generateChildren)}
        </Grid>
      </Wrapper>
    );
  }
}
