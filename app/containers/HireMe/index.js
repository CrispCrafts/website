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

const Title = styled.div`
  font-size: 2em;
`;

const Sub = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 24px;
    background: #E53935;
    font-weight: bolder;
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.theme};
    animation: ${riseUp} ease-in-out 400ms;
`;

const Icons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Icon = styled.a`
  margin: 0 8px;
  color: #ef9a9a;
  cursor: pointer;
  &:hover {
    color: #FFEB3B;
  }
`;
const ResIcon = styled.a`
  margin: 0 8px;
  color: #ef9a9a;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    color: #FFEB3B;
  }
`;

export default class HireMe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper theme={'#FFEB3B'}>
          <Title>Hire Me</Title>
          <Sub>Resume</Sub>
          <Icons>
            <ResIcon href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.pdf?alt=media" target="_blank"><i className="fas fa-file-pdf" /></ResIcon>
            <ResIcon href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.docx?alt=media" target="_blank"><i className="fas fa-file-alt"/></ResIcon>
          </Icons>
          <Sub>Find Me</Sub>
          <Icons>
            <Icon href="https://github.com/Cristian006" target="_blank"><i className="fab fa-github"/></Icon>
            <Icon href="https://www.linkedin.com/in/cristian-ponce006/" target="_blank"><i className="fab fa-linkedin"/></Icon>
          </Icons>
          <Sub>Contact Me</Sub>
          <Icons>
            <Icon href="mailto:cristianrponce06@gmail.com"><i className="fas fa-envelope" /></Icon>
          </Icons>
      </Wrapper>
    );
  }
}
