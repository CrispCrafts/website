import React from 'react';
import styled, { keyframes } from 'styled-components';
import languageColor from 'utils/language-colors';
import ReactMarkdown from 'react-markdown';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import starman from './starman_privacy';
import {
  loadCraft,
  removeCraft,
} from './actions';
import {
  makeSelectCraft,
  makeSelectLoadingCraft,
  makeSelectError,
} from './selectors';

import '../../markdown.css';

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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
  margin-right: 8px;
  cursor: pointer;
  color: inherit;
  font-size: 32px;
  text-decoration: none;
  transition: all 200ms ease-in;
  color: #ef9a9a;
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
  animation: ${fadeIn} ease-in 200ms;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  padding-bottom: 24px;
  background: #E53935;
  color: #ffcdd2;
  font-weight: bolder;
  animation: ${riseUp} ease-in-out 400ms;
`;

const Title = styled.div`
  font-size: 3em;
`;

const SubMessage = styled.div`
  width: 100%;
  padding: 8px 0px;
  font-style: italic;
  font-size: 1.5em;
`;

const LanColor = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
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
  display: flex;
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

const ScreenShot = styled.img`
  border-radius: 4px;
  max-width: ${props => props.orientation === 'portrait' ? (props.featured ? '300px' : '175px') : (props.featured ? '500px' : '300px')};
  margin: 0px 4px 0px 0px;
  height: auto;
`;

const ScreenShotGrid = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow: auto;
  height: auto;
  position: relative;
  align-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateCreated = styled.div`
  font-size: 1.2em;
`;

class CraftPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      privacy: false,
    };
  }
  componentDidMount() {
    if (this.props.location.search.indexOf('privacy_policy') !== -1) {
      this.setState({
        privacy: true,
      });
    }
    this.props.loadCraft(this.props.match.params.craft);
  }

  componentWillUnmount() {
    this.setState({ privacy: false });
    this.props.removeCraft();
  }

  generateLanguageColors = (languages = []) => {
    return languages.map((l) => {
      return (
        <Lang key={l}>
          <LanColor color={languageColor(l)}/>
          <span style={{ paddingLeft: '10px' }}>{l}</span>
        </Lang>
      );
    });
  };

  generateTime = (time) => {
    /// var offset = time;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(time.seconds * 1000);
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  };

  generateScreenShots = (screenshots = []) => {
    return screenshots.map((s, index) => {
      if (s.url) {
        return (
          <ScreenShot key={s.url} src={s.url} orientation={s.orientation} featured></ScreenShot>
        );
      }
      return null;
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
    const { privacy } = this.state;
    const {
      title,
      sub,
      tags,
      languages,
      technologies,
      theme,
      icon,
      feature,
      featureSize,
      link,
      git,
      writeup,
      screenshots,
      created,
      lastUpdate
    } = this.props.craft;

    return (
      <Wrapper theme={'#FFEB3B'}>
        <Header>
          <Icon background={theme} src={icon}></Icon>
          <Title>{title}</Title>
        </Header>
        {
          feature &&
          <Image
            feature={feature}
            background={theme}
            featureSize={featureSize || 'cover'}
          />
        }
        {
          screenshots &&
          <ScreenShotGrid>
            {
              this.generateScreenShots(screenshots)
            }
          </ScreenShotGrid>
        }
        <SpaceBetween>
          <SameLine>
            {
              technologies &&
                <Tech>{technologies.join(', ')}</Tech>
            }
            <Languages>{this.generateLanguageColors(languages)}</Languages>
          </SameLine>
          <SameLine>
            {
              (link && link.project) &&
              <Action href={link.project} target="_blank" highlightColor={theme}>
                <i className="fas fa-link" />
              </Action>
            }
            {
              (link && link.android) &&
              <Action href={link.android} target="_blank" highlightColor={theme}>
                <i className="fab fa-android" />
              </Action>
            }
            {
              (link && link.ios) &&
              <Action href={link.ios} target="_blank" highlightColor={theme}>
                <i className="fab fa-app-store-ios" />
              </Action>
            }
            {
              (git && !git.private && git.repo) &&
              <Action href={git.repo} target="_blank" highlightColor={theme}>
                <i className="fab fa-github" />
              </Action>
            }
          </SameLine>
        </SpaceBetween>
        <SubMessage>{sub}</SubMessage>
        {
          privacy &&
            <ReactMarkdown
              className="markdown-body"
              source={starman}
            />
        }
        {
          (writeup && !privacy) &&
            <ReactMarkdown
              className="markdown-body"
              source={writeup}
            />
        }
        <div>
          {
            created &&
              <div><strong style={{color: 'white'}}>Craft Created:</strong> {this.generateTime(created)}</div>
          }
          {
            lastUpdate &&
              <div><strong style={{color: 'white'}}>Craft Last Updated:</strong> {this.generateTime(lastUpdate)}</div>
          }
        </div>
        <Tags>{this.generateTags(tags)}</Tags>
      </Wrapper>
    );
  }
}

CraftPage.defaultProps = {
  craftId: '',
  craft: null,
  loadingCraft: false,
  error: false,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadCraft: (craftId) => dispatch(loadCraft(craftId)),
    removeCraft: () => dispatch(removeCraft()),
  };
}

const mapStateToProps = createStructuredSelector({
  craft: makeSelectCraft(),
  loadingCraft: makeSelectLoadingCraft(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'craftdetail', reducer });
const withSaga = injectSaga({ key: 'craftdetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CraftPage);
