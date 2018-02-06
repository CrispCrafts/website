import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import chip from '../../images/chip.png';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNav: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    if (window.scrollY > 60 && !this.state.fixedNav) {
      this.setState({
        fixedNav: true,
      });
    } else if (window.scrollY < 60 && this.state.fixedNav) {
      this.setState({
        fixedNav: false,
      });
    }
  }

  render() {
    const slideDown = keyframes`
      0%{transform:translateY(-100%)}
      100%{transform:translateY(0)}
    `;

    const Wrapper = styled.div`
      z-index: 1000;
      padding: 0;
      top: 0;
      position: ${this.state.fixedNav ? 'fixed' : 'absolute'};
      width: 100%;
      height: 70px;
      color: white;
      background-color: #E53935;
      box-shadow: ${this.state.fixedNav ? '0 1px 1px rgba(0,0,0,.15)' : ''};
      border-bottom: ${this.state.fixedNav ? '' : '1px solid #D32F2F'};
      animation: ${this.state.fixedNav ? `${slideDown} 420ms cubic-bezier(.165,.84,.44,1)` : ''};
    `;

    const Container = styled.div`
      max-width: 1020px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0 4vw;
    `;

    const Title = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      font-size: 24px;
      font-weight: 800;
    `;

    const Logo = styled.img`
      width: 36px;
      margin-right: 12px;
    `;

    return (
      <Wrapper>
        <Container>
          <Title>
            <Logo src={chip} alt="CrispLogo" />
            <span>CrispCrafts</span>
          </Title>
        </Container>
      </Wrapper>
    );
  }
}
