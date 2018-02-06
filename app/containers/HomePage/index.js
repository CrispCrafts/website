/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import AppBar from '../../components/AppBar';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`    
      padding-top: 70px;
    `;

    return (
      <Wrapper>
        <AppBar />
        <p className="App-intro">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          Site Coming Soon...
          <br />
          <div style={{ textAlign: 'left', marginLeft: '30px' }}>
            <h1><a href="https://colors.crispcrafts.com">colors</a></h1>
            <p>A set of color tools</p>
            <h1><a href="https://characters.crispcrafts.com">characters</a></h1>
            <p>A set of character tools</p>
            <h1><a href="https://github.com/cristian006/ReactiveMirror">reactive-mirror</a></h1>
            <p>A modular react + electron app meant to run on Raspberry Pi 3 for a DIY Smart Mirror</p>
          </div>
        </p>
      </Wrapper>
    );
  }
}
