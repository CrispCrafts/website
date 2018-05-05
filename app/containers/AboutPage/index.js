import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 24px;
    background: #E53935;
    font-weight: bolder;
    text-align: center;
    font-size: 1.5em;
    color: ${props => props.theme};
    animation: ${riseUp} ease-in-out 400ms;
`;

const Link = styled(NavLink)`
  font-weight: 200;
  background-size: ${props => props.selected ? '100% 2px, auto' : '0 2px, auto'};
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: linear-gradient(#FFEB3B, #FFEB3B);
  transition: all 200ms ease-in;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    background-size: 100% 2px, auto;
  }
`;

export default class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
      super(props);
    }

    render() {
      return (
        <Wrapper theme={'#FFEB3B'}>
            <Title>About Me</Title>
            <div>Just an idie developer/student from California that likes to build stuff :)</div>
            <div>Need help with an upcoming project or application?
            <br/>Have a look through some of my <Link to="/">crafts</Link> and consider <Link to="/hireme">hiring me</Link>!</div>
            <br/>
            <Title>Why Crisp Crafts?</Title>
            <div>The name was made from taking the first part of Cristian and my last initial P</div>
            <div>Cristian Ponce -> CrisP Crafts</div>
            <div>Pronounced as Cris P (Crispy /ˈkrispē/)</div>
        </Wrapper>
      );
    }
  }
  