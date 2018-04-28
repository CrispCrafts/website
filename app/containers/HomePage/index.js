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
import Fab from 'components/Fab';
import { projects } from 'utils/mock-projects';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { changeCategory } from './actions';
import { makeSelectCategory } from './selectors';
import reducer from './reducer';

import injectReducer from 'utils/injectReducer';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function  
  generateChildren = (c) => <CraftCard key={c.id} {...c} />;

  render() {
    const Wrapper = styled.div`
      width: 100%;
      min-height: 100%;
      background: #E53935;
      position: relative;
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
        <AppHeader category={this.props.category} onChangeCategory={this.props.onChangeCategory}/>
        <Grid>
          {
            this.props.cards.filter((x) => {
              if (this.props.category === 'All') {
                return true;
              }
              return x.tags.indexOf(this.props.category) > -1;
            }).map(this.generateChildren)
          }
        </Grid>
        <Fab />
      </Wrapper>
    );
  }
}

HomePage.defaultProps = {
  category: 'All',
  cards: projects,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCategory: (category) => dispatch(changeCategory(category)),
  };
}

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
