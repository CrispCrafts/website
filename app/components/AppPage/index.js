import React from 'react';
import styled from 'styled-components';

export default function AppPage(props) {
  const Wrapper = styled.div`
    min-height: calc(100vh - 50px);
    padding-top: 70px;
    background: #E53935;
  `;

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
