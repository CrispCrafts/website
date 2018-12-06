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
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppPage from 'components/AppPage';
import HomePage from '../HomePage/Loadable';
import CraftPage from '../CraftPage/Loadable';
import AboutPage from '../AboutPage/Loadable';
import HireMe from '../HireMe/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';

const AppContainer = styled.div`
  overflow: hidden;
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet
          titleTemplate="%s - CrispCrafts"
          defaultTitle="CrispCrafts"
        >
          <meta name="description" content="CrispCrafts Website" />
        </Helmet>
        <AppBar />
        <AppPage>
          <Switch>
            <Route exact path="/crafts/privacy_policy/:craft" component={CraftPage} />
            <Route exact path="/crafts/:craft" component={CraftPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/hireme" component={HireMe} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppPage>
        <AppFooter />
      </AppContainer>
    );
  }
}
