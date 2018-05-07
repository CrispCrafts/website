import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin: 100px auto;
`;

const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FFEA00;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2.0s infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;

export default class LoadingIndicator extends React.Component {
  render() {
    return (
      <Wrapper>
        <Bounce />
        <Bounce delay={'-1.0s'} />
      </Wrapper>
    );
  }
}
