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
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
// import messages from './messages';
import CraftCard from 'components/CraftCard';
import AppHeader from 'components/AppHeader';

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
          <CraftCard themeColor="#C62828" src="http://www.scarymommy.com/wp-content/uploads/2015/08/tween-tech-what-parents-need-to-know-about-clash-of-the-clans.jpg?w=700" title="Greek Wars" subTitle="Unity" synopsis="A 2.5D platformer made with the Unity Game Engine" href="https://greekwars.crispcrafts.com" />
          <CraftCard themeColor="linear-gradient(to right, #108dc7, #ef8e38)" title="Colors" subTitle="Web" synopsis="A set of useful color tools" href="https://colors.crispcrafts.com" />
          <CraftCard themeColor="#8e08d1" title="Characters" subTitle="Web" synopsis="A set of useful ascii tools" href="https://characters.crispcrafts.com" />
          <CraftCard themeColor="#b1f779" color="#212121" title="Reactive Mirror" subTitle="IoT" synopsis="A DIY Magic Mirror application" href="https://mirror.crispcrafts.com" />
        </Grid>
      </Wrapper>
    );
  }
}


/*
          <p>A set of character tools</p>
          <h1><a href="https://github.com/cristian006/ReactiveMirror">reactive-mirror</a></h1>
          <p>A modular react + electron app meant to run on Raspberry Pi 3 for a DIY Smart Mirror</p>
        </div>
        <CraftCard themeColor="linear-gradient(to right, #108dc7, #ef8e38)" title="Colors" subTitle="Web" synopsis="A set of useful color tools" href="https://colors.crispcrafts.com" />
          <CraftCard themeColor="#8e08d1" title="Characters" subTitle="Web" synopsis="A set of useful ascii tools" href="https://characters.crispcrafts.com" />
          <CraftCard themeColor="#b1f779" color="#212121" title="Reactive Mirror" subTitle="IoT" synopsis="A DIY Magic Mirror application" href="https://mirror.crispcrafts.com" />
        
*/
