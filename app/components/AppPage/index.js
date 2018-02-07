import React from 'react';
import styled from 'styled-components';

export default function AppPage(props) {
  const Wrapper = styled.div`
    min-height: calc(100vh - 50px);
    padding-top: 150px;
    background: #E53935;
    @media (max-width: 700px) {
      padding-top: 70px;
    }
  `;

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
