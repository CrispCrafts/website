import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Horizontal = styled.div`
  padding: 0;
  display: flex;
  color: #ef9a9a;
  flex-direction: row;
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  color: #FFF176;
  padding: 0 16px;
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
`;

const Vertical = styled.div`
  background: #C62828;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  padding: 0 2rem 4rem;
  z-index: 900;
  transform: ${props => props.menuOpen ? 'translateX(0)' : 'translateX(100%)'};
  animation: ${props => props.open ? slideLeft : slideRight} 100ms ease-in;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 16px;
`;

const SubTitle = styled.div`
  font-size: 1.4em;
`;

export default class NavItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false,
    };
  }

  componentDidMount() {
    this.vertical.addEventListener('animationend', this.animationEnded);
  }
  
  componentWillUnmount() {
    this.vertical.removeEventListener('animationend', this.animationEnded);
  }

  animationEnded = () => {
    this.setState({
      open: this.props.open
    });
  }

  render() {
    return (
      <Wrapper>
        <MenuButton
          onClick={this.props.openMenu}
        >
          <i className="fas fa-bars"></i>
        </MenuButton>
        <Vertical
          innerRef={menu => this.vertical = menu}
          open={this.props.open}
          menuOpen={this.state.open}
        >
          <Header>
            <SubTitle>Crisp Menu</SubTitle>
            <MenuButton onClick={this.props.openMenu}>
              <i className="fas fa-times"></i>
            </MenuButton>
          </Header>
          {this.props.children}
        </Vertical>
        <Horizontal>
          {this.props.children}
        </Horizontal>
      </Wrapper>
    );
  }
}

NavItems.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  openMenu: PropTypes.func,
};
