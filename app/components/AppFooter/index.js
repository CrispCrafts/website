import React from 'react';
import styled from 'styled-components';
import chip from '../../images/chip.png';

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
    color: white;
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

  const Icon = styled.i`
    color: white;
    font-size: 18px;
    margin-left: 8px;
  `;

  return (
    <Wrapper>
      <div>
        <span>CrispCrafts © 2018</span>
      </div>
      <Logo src={chip} alt="CrispLogo" />
      <Social>
        <Icon className="fas fa-envelope" />
        <Icon className="fab fa-twitter" />
        <Icon className="fab fa-facebook" />
        <Icon className="fab fa-instagram" />
        <Icon className="fab fa-youtube" />
      </Social>
    </Wrapper>
  );
}
