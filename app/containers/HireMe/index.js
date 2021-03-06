import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
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
  color: white;
  margin-bottom: 24px;
`;

const Sub = styled.div`
    color: white;
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
    color: #ffcdd2;
    animation: ${riseUp} ease-in-out 400ms;
`;

const Icons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding-bottom: 24px;
`;

const Icon = styled.div`
  margin: 0 8px;
  cursor: pointer;
  &:hover {
    color: #FFEB3B;
  }
`;

const ResIcon = styled(Icon)`
  font-size: 32px;
`;

const IconButton = styled.a`
  display: flex;
  flex-direction: column;
  color: #ef9a9a;
  padding: 0 24px;
  text-decoration: none;
  &:hover ${Icon},
  &:hover {
    color: #FFEB3B;
    cursor: pointer;
  }
  &:active,
  &:link,
  &:visited {
    text-decoration: none;
  }
`;

export default class HireMe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
          <Title>Hire Me</Title>
          <Icons>
            <IconButton href="https://github.com/Cristian006" target="_blank">
              <Icon><i className="fab fa-github"/></Icon>
              <div>GitHub</div>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/cristian-ponce006/" target="_blank">
              <Icon><i className="fab fa-linkedin"/></Icon>
              <div>LinkedIn</div>
            </IconButton>
            <IconButton href="mailto:cristianrponce06@gmail.com">
              <Icon><i className="fas fa-envelope" /></Icon>
              <div>Email</div>
            </IconButton>
          </Icons>
          <Sub>Download My Resume</Sub>
          <Icons>
            <IconButton href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.pdf?alt=media" target="_blank">
              <ResIcon><i className="fas fa-file-pdf" /></ResIcon>
              <div>pdf</div>
            </IconButton>
            <IconButton href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.docx?alt=media" target="_blank">
              <ResIcon><i className="fas fa-file-alt"/></ResIcon>
              <div>docx</div>
            </IconButton>
          </Icons>
      </Wrapper>
    );
  }
}
