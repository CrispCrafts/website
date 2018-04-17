import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
// import messages from './messages';

export default class CraftPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      width: 100%;
      min-height: 100%;
      background: #E53935;
    `;

    return (
      <Wrapper>
        {this.props.match.params.craft}
      </Wrapper>
    );
  }
}
