import React from 'react';
import styled from 'styled-components';

export default function NavItem(props) {
  const Wrapper = styled.div`
    font-size: 16px;
    font-weight: 200;
    padding: 4px 8px;
  `;

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
