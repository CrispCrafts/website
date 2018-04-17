/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from '../HomePage/Loadable';
import CraftPage from '../CraftPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import AppBar, { NavItems, NavItem } from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import AppPage from '../../components/AppPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 0,
      theme: '#D32F2F',
    };
  }

  render() {
    const AppContainer = styled.div`
      overflow: hidden;
    `;

    return (
      <AppContainer>
        <AppBar selected={this.state.selectedPage} />
        <AppPage style={{ background: this.state.theme }}>
          <Switch>
            <Route exact path="/crafts/:craft" component={CraftPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppPage>
        <AppFooter />
      </AppContainer>
    );
  }
}
