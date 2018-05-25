import React from 'react';
import styled from 'styled-components';
import chip from 'images/chip.png';

export default function AppFooter() {
  const Wrapper = styled.div`
    width: 100%;
    background: #C62828;
    height: 50px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    color: #ef9a9a;
    border-top: 1px solid #B71C1C;
  `;

  const Logo = styled.img`
    width: 24px;
  `;

  const Social = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
  `;

  const Icon = styled.a`
    font-size: 18px;
    margin: 0 8px;
    color: inherit;
    cursor: pointer;
    &:hover {
      color: #FFEB3B;
    }
  `;

  return (
    <Wrapper>
      <div>
        <span>CrispCrafts © 2018</span>
      </div>
      <Logo src={chip} alt="CrispLogo" />
      <Social>
        <Icon href="mailto:cristianrponce06@gmail.com"><i className="fas fa-envelope" /></Icon>
        <Icon href="https://github.com/Cristian006" target="_blank"><i className="fab fa-github"/></Icon>
        <Icon href="https://www.linkedin.com/in/cristian-ponce006/" target="_blank"><i className="fab fa-linkedin"/></Icon>
      </Social>
    </Wrapper>
  );
}
