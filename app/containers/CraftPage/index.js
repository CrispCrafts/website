import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
import languageColor from 'utils/language-colors';
import ReactMarkdown from 'react-markdown';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  loadCraft,
} from './actions';
import saga from './saga';
import {
  makeSelectCraft,
  makeSelectLoadingCraft,
  makeSelectError,
} from './selectors';

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

const Icon = styled.div`
  width: 72px;
  min-width: 72px;
  height: 72px;
  min-height: 72px;
  margin-right: 12px;
  border-radius: 5px;
  background-color: ${props => props.background};
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

const Action = styled.a`
  margin: 8px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: all 200ms ease-in;
  &:hover {
    color: #FFEB3B;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.feature});
  background-size: ${props => props.featureSize};
  background-position: center;
  background-color: ${props => props.background};
  height: 400px;
  border-radius: 5px;
  margin: 20px 0px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  padding-bottom: 24px;
  background: #E53935;
  font-weight: bolder;
  color: ${props => props.theme};
  animation: ${riseUp} ease-in-out 400ms;
`;

const Title = styled.div`
  font-size: 3em;
`;

const SubMessage = styled.div`
  width: 100%;
  padding: 8px 0px;
  font-size: 1.5em;
`;

const LanColor = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color}
`;

const Lang = styled.span`
  display: flex;
  align-items: center;
  width: -fit-content;
  margin-right: 10px;
`;

const Languages = styled.div`
  font-size: 1.3em;
  font-weight: 600;
`;

const Tags = styled.div`
  font-size: 1.1em;
  margin: 8px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tech = styled.div`
  font-size: 1.4em;
  margin-right: 10px;
`;

const Header = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

const SameLine = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

const Tag = styled.div`
  padding: 6px 10px;
  background: rgba(0,0,0,0.2);
  margin: 0px 8px 0px 0px;
  border-radius: 5px;
`;

class CraftPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      sub: '',
      technologies: [],
      tags: [],
      languages: [],
    };
  }

  componentDidMount() {
    this.props.loadCraft();
    // this.getCraft(this.props.match.params.craft);
  }

  getCraft = (id) => {
    const c = projects.filter(x => x.id === id)[0] || {};
    console.log(c);
    this.setState({...c});
  };

  generateLanguageColors = (languages = []) => {
    return languages.map((l) => {
      return (
        <Lang key={l}>
          <LanColor color={languageColor(l)}/>
          <span style={{paddingLeft: '10px'}}>{l}</span>
        </Lang>
      );
    });
  };

  generateTags = (tags = []) => {
    return tags.map((t) => {
      return (
        <Tag key={t}>
          {t}
        </Tag>
      );
    });
  }
  
  render() {
    const {
      title,
      sub,
      tags,
      languages,
      technologies
    } = this.state;

    return (
      <Wrapper theme={'#FFEB3B'}>
        <Header>
          <Icon background={this.state.theme} src={this.state.icon}></Icon>
          <Title>{title}</Title>
        </Header>
        {
          this.state.feature &&
          <Image
            feature={this.state.feature}
            background={this.state.theme}
            featureSize={this.state.featureSize || 'cover'} />
        }
        <SameLine>
          <Tech>{technologies.join(', ')}</Tech>
          <Languages>{this.generateLanguageColors(languages)}</Languages>
        </SameLine>
        <SubMessage>{sub}</SubMessage>
        <Tags>{this.generateTags(tags)}</Tags>
        <div>
          {
            this.state.link &&
            <Action href={this.state.link} target="_blank" highlightColor={this.state.theme}>
              <i className="fas fa-link" />
            </Action>
          }
          {
            (!this.state.private && this.state.git) &&
            <Action href={this.state.git} target="_blank" highlightColor={this.state.theme}>
              <i className="fab fa-github" />
            </Action>
          }
        </div>
        <ReactMarkdown
          className="result"
          source={"# HELLO\n### HEY"}
        />
      </Wrapper>
    );
  }
}

CraftPage.defaultProps = {
  craft: null,
  loadingCraft: false,
  error: false,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadCraft: () => dispatch(loadCraft()),
  };
}

const mapStateToProps = createStructuredSelector({
  craft: makeSelectCraft(),
  loadingCraft: makeSelectLoadingCraft(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'craftdetail', reducer})
const withSaga = injectSaga({key: 'craftdetail', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CraftPage);
