import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
import { projects } from 'utils/mock-projects';
import languageColor from 'utils/language-colors';

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
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  background: #E53935;
  font-weight: bolder;
  color: ${props => props.theme};
  animation: ${riseUp} ease-in-out 400ms;
`;

const Title = styled.div`
  width: 100%;
  font-size: 3em;
`;

const SubMessage = styled.div`
  width: 100%;
  max-width: 500px;
  font-size: 1.5em;
`;

const Languages = styled.div`
  font-size: 1.3em;
`;

export default class CraftPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      title: '',
      sub: '',
      id: ''
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
      return <div key={l} style={{color: languageColor(l)}}>{l}</div>;
    });
  };
  
  render() {
    const {
      title,
      sub,
      languages
    } = this.state;

    return (
      <Wrapper theme={'#FFEB3B'}>
        <Title>{title}</Title>
        <Languages>{this.generateLanguageColors(languages)}</Languages>
        <SubMessage>{sub}</SubMessage>
      </Wrapper>
    );
  }
}
