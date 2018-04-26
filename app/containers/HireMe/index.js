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

export default class HireMe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper theme={'#FFEB3B'}>
          <div>Hire Me</div>
          <div>Still need to finish this page</div>
      </Wrapper>
    );
  }
}
