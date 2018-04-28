import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
import { projects } from 'utils/mock-projects';
import languageColor from 'utils/language-colors';
import starman from '../../images/starman/ss4.png';

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
  background-image: url(${starman});
  background-size: cover;
  background-position: center;
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
  font-size: 1.3em;
`;

const Tech = styled.div`
  font-size: 1.4em;
  margin-right: 12px;
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

export default class CraftPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    this.getCraft(this.props.match.params.craft);
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
          <span style={{paddingLeft: '6px'}}>{l}</span>
        </Lang>
      );
    });
  };
  
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
          <Icon background={this.state.theme} src={this.state.src}></Icon>
          <Title>{title}</Title>
        </Header>
        <Image />
        <SameLine>
          <Tech>{technologies.join(', ')}</Tech>
          <Languages>{this.generateLanguageColors(languages)}</Languages>
        </SameLine>
        <SubMessage>{sub}</SubMessage>
        <Tags>{tags.join(', ')}</Tags>
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
      </Wrapper>
    );
  }
}
