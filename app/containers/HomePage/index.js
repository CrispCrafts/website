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
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';
// import messages from './messages';
import CraftCard from 'components/CraftCard';
import AppHeader from 'components/AppHeader';
import Fab from 'components/Fab';
// import { projects } from 'utils/mock-projects';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  changeCategory,
  loadCategories,
  loadCrafts,
} from 'containers/App/actions';
import saga from './saga';
import {
  makeSelectCrafts,
  makeSelectCategory,
  makeSelectCategories,
  makeSelectLoadingCategories,
  makeSelectLoadingCrafts,
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors';

const riseUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #E53935;
  position: relative;
  animation: ${riseUp} ease-in-out 400ms;
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

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function  
  generateChildren = (c) => <CraftCard key={c.id} {...c} />;

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadCrafts();
  }

  render() {
    const {
      category,
      categories,
      loadingCategories,
      onChangeCategory,
      crafts
    } = this.props;
    
    return (
      <Wrapper>
        <AppHeader
          loadingCategories={loadingCategories}
          categories={categories}
          category={category}
          onChangeCategory={onChangeCategory}/>
        <Grid>
          {
            crafts.filter((x) => {
              if ((!x.hide || !x.tags) && category === 'All') {
                return true;
              }
              return x.tags && (!x.hide && x.tags.indexOf(category) > -1);
            }).map(this.generateChildren)
          }
        </Grid>
        <Fab />
      </Wrapper>
    );
  }
}

/*
HomePage.propTypes = {
  loadingCategories: PropTypes.bool,
  loadingCrafts: PropTypes.bool,
  error: PropTypes.string,
  crafts: PropTypes.array,
  categories: PropTypes.array,
  loadCategories: PropTypes.func,
  loadCrafts: PropTypes.func,
  onChangeCategory: PropTypes.func,
};
*/

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCategory: (category) => dispatch(changeCategory(category)),
    loadCategories: () => dispatch(loadCategories()),
    loadCrafts: () => dispatch(loadCrafts()),
  };
}

HomePage.defaultProps = {
  category: 'All',
  categories: [],
  crafts: [],
  loadingCategories: false,
  loadingCrafts: false,
  error: false,
  onChangeCategory: () => {},
  loadCategories: () => {},
  loadCrafts: () => {},
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  category: makeSelectCategory(),
  crafts: makeSelectCrafts(),
  loadingCategories: makeSelectLoadingCategories(),
  loadingCrafts: makeSelectLoadingCrafts(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
//  withReducer,
  withSaga,
  withConnect,
)(HomePage);
