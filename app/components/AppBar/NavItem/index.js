import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavItem(props) {

  const Wrapper = styled(NavLink)`
    font-size: 16px;
    font-weight: 200;
    padding: 4px 8px;
    background-size: 0 2px, auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-image: linear-gradient(#FFEB3B, #FFEB3B);
    transition: all 200ms ease-in;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    &:hover {
      background-size: 100% 2px, auto;
    }
  `;

  return (
    <Wrapper to={props.to}>
      {props.children}
    </Wrapper>
  );
}
