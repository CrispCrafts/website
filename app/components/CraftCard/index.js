import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';

const pullDown = keyframes`
  0% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(-20%);
  }
`;

const pullUp = keyframes`
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(20%);
  }
`;

const Icon = styled.div`
  color: #FFEB3B;
  font-size: 18px;
  margin: 8px;
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

const Wrapper = styled.div`
  user-select: none;
  margin: 0 auto;
  overflow: hidden;
  opacity: ${props => props.opacity};
  color: ${props => props.color};
  background: ${props => props.theme};
  max-width: 300px;
  min-width: 250px;
  width: 100%;
  height: 350px;
  margin-bottom: 24px;
  transition: all 200ms ease-in;
  border-radius: ${props => props.cornerRad};
  box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
  position: relative;
  cursor: pointer;
  &:hover ${Icon} {
    animation: ${props => props.iconAnimation};
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 12px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
`;

const Horizontal = styled.hr`
  width: ${props => props.width};
  background-color: #FFEB3B;
  margin: 3px 0;
  height: 3px;
  border-radius: 8px;
  border: 0;
  transition: all ease-in 200ms;
`;

const SubTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
`;

const Image = styled.div`
  transform: ${props => props.transform};
  opacity: ${props => props.opacity};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0)), url(${props => props.src});
  transition: all 200ms ease-in;
`;

const Content = styled.div`
  bottom: ${props => props.bottom};
  opacity: ${props => props.opacity};
  transition: all 300ms ease-in;
  padding: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  left: 0;
  right: 0;
  position: absolute;
  padding-bottom: 48px;
`;

const Summary = styled.div`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArrowButton = styled.div`
  height: 48px;
  position: absolute;
  bottom: ${props => props.bottom};
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in;
`;

const More = styled.div`
  top: ${props => props.top};
  opacity: ${props => props.opacity};
  border-radius: ${props => props.cornerRad};
  background-color: ${props => props.theme};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 200ms ease-in;
  padding: 12px;
  padding-top: 48px;
  cursor: default;
`;

const ShowMoreText = styled.div`
  overflow: hidden;
  text-align: left;
  opacity: ${props => props.hovering ? 1 : 0};
  width: ${props => props.width};
  transition: all 300ms ease-out;
  white-space: nowrap;
  padding-left: 8px;
`;

const QuickActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export class CraftCard extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      mounted: false,
      hovering: false,
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.id !== nextProps.id ||
      nextState.mounted !== this.state.mounted ||
      nextState.hovering !== this.state.hovering ||
      nextState.showMore !== this.state.showMore ||
      this.props.title !== nextProps.title) {
      return true;
    }
    return false;
  }

  generateTech = (t, indx, arr) => indx === arr.length - 1 ? `${t}` : `${t}, `;

  generateTime = (time) => {
    /// var offset = time;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(time.seconds * 1000);
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  };

  showMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  render() {
    return (
      <Wrapper
        onClick={() => {
          this.props.history.push(`/crafts/${this.props.id}`);
        }}
        onMouseEnter={() => {
          if(!this.state.mounted) return;
          this.setState({
            hovering: true,
          });
        }}
        onMouseLeave={() => {
          if(!this.state.mounted) return;
          this.setState({
            hovering: false,
          });
        }}
        hovering={this.state.hovering}
        color={this.props.color}
        theme={this.props.theme}
        cornerRad={this.props.cornerRad}
        opacity={this.state.mounted ? 1 : 0}
        iconAnimation={`${this.state.showMore ? pullUp : pullDown} 500ms cubic-bezier(.165,.84,.44,1) infinite`}        
      >
        <Image
          transform={this.state.hovering ? 'scale(1.2)' : 'scale(1)'}
          opacity={this.state.hovering ? 1 : 0.8}
          src={this.props.icon}
          />
        <Content
          opacity={this.state.showMore ? 0 : 1}
          bottom={this.state.showMore ? '100%' : '0'}
          >
          <TitleBar>
            <Title>
              {this.props.title}
            </Title>
            <Horizontal width={this.state.hovering ? '40%' : '50px'} />
            <SubTitle>
              {this.props.technologies.map(this.generateTech)}
            </SubTitle>
          </TitleBar>
          <Summary>{this.props.sub}</Summary>
        </Content>
        <More
          onClick={(e) => {
            e.stopPropagation();
          }}
          opacity={this.state.showMore ? 1 : 0}
          top={this.state.showMore ? 0 : '100%'}
          cornerRad={this.props.cornerRad}
          theme={this.props.theme}
        >
          <div><strong>Craft:</strong> {this.props.title}</div>
          <div><strong>Languages:</strong> {this.props.languages.join(', ')}</div>
          <div><strong>Technologies:</strong> {this.props.technologies.join(', ')}</div>
          <div><strong>Tags:</strong> {this.props.tags.join(', ')}</div>
          {
            this.props.created &&
              <div><strong>Created:</strong> {this.generateTime(this.props.created)}</div>
          }
          {
            this.props.lastUpdate &&
              <div><strong>Last Updated:</strong> {this.generateTime(this.props.lastUpdate)}</div>
          }
          <QuickActions>
            <span>
              {
                this.props.link &&
                <Action href={this.props.link} target="_blank" highlightColor={this.props.theme}>
                  <i className="fas fa-link" />
                </Action>
              }
              {
                (!this.props.private && this.props.git) &&
                <Action href={this.props.git} target="_blank" highlightColor={this.props.theme}>
                  <i className="fab fa-github" />
                </Action>
              }
            </span>
            <Action
              onClick={() => {
                this.props.history.push(`/crafts/${this.props.id}`);
              }}
            >
              More <i className="fas fa-chevron-right"></i>
            </Action>
          </QuickActions>
        </More>
        <ArrowButton
          bottom={!this.state.showMore ? 0 : 'calc(100% - 48px)'}
          onClick={(e) => {
            e.stopPropagation();
            this.showMore();
          }}
        >
        {
          this.state.showMore &&
          <Icon>
            <i className={`fas fa-chevron-down`}></i>
          </Icon>
        }
        {
          !this.state.showMore &&
          <Icon>
            <i className={`fas fa-chevron-up`}></i>
          </Icon>
        }
        <ShowMoreText
          width={this.state.hovering ? '80px' : '0px'}
          hovering={this.state.hovering}>
          {this.state.showMore ? 'Close' : 'Quick Look'}
        </ShowMoreText>
        </ArrowButton>
      </Wrapper>
    );
  }
}

CraftCard.defaultProps = {
  key: '',
  title: 'Title',
  sub: '',
  tags: [],
  technologies: [],
  languages: [],
  theme: '#C62828',
  textColor: '#212121',
  color: '#fff',
  src: '',
  cornerRad: '8px',
};

export default withRouter(CraftCard);

// animation={`${this.state.showMore ? pullUp : pullDown} 500ms cubic-bezier(.165,.84,.44,1) infinite`}
