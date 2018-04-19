import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import chip from '../../images/chip.png';
import NavItems from './NavItems';
import NavItem from './NavItem';
import CraftSelector from 'components/CraftSelector';

const slideDown = keyframes`
  0% {
    transform:translateY(-100%)
  }
  100%{transform:translateY(0)}
`;

const slideUp = keyframes`
  0%{transform:translateY(0)}
  100%{transform:translateY(-100%)}
`;

const Wrapper = styled.div`
  z-index: 1000;
  padding: 0;
  top: 0;
  position: ${props => props.fixedNav ? 'fixed' : 'absolute'};
  width: 100%;
  height: 70px;
  color: white;
  box-shadow: ${props => props.fixed ? '0 1px 1px rgba(0,0,0,.15)' : ''};
  background-color: ${props => props.fixed ? '#C62828' : '#E53935'};
  animation: ${props => props.fixed ? `${slideDown} 300ms cubic-bezier(.165,.84,.44,1)` : `${slideUp} 200ms cubic-bezier(.165,.84,.44,1)`};
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  font-size: 24px;
  font-weight: 800;
  opacity: ${props => props.fixed ? 1 : 0};
  height: ${props => props.fixed ? 'auto' : '100%'};
  transition: all ease-in 200ms;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: ${props => props.fixed ? 'center' : 'flex-start'};
  margin: 0 auto;
  padding: ${props => props.fixed ? '0 4vw' : '20px 4vw'};
`;

const TitleSection = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex: 1;
`;

const Logo = styled.img`
  width: 36px;
  margin-right: 12px;
`;

const LogoAccent = styled.span`
  color: #FFF176;
`;

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNav: false,
      fixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
    this.bar.addEventListener('animationend', this.handleAnimationEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
    this.bar.removeEventListener('animationend', this.handleAnimationEnd);
  }

  handleAnimationEnd = () => {
    console.log(this.state.fixedNav)
    this.setState({
      fixed: this.state.fixedNav
    });
  }

  handleScroll = () => {
    if (window.scrollY > this.props.fixedPosition && !this.state.fixedNav) {
      this.setState({
        fixed: true,
        fixedNav: true,
      });
    } else if (window.scrollY < this.props.fixedPosition && this.state.fixedNav) {
      this.setState({
        fixedNav: false,
      });
    }
  }

  render() {
    return (
      <Wrapper
        fixed={this.state.fixedNav}
        fixedNav={this.state.fixed}
        innerRef={(e) => {this.bar = e;}}>
        <Container
          fixed={this.state.fixedNav}>
          <TitleSection>
            <Title fixed={this.state.fixedNav}>
              <Logo src={chip} alt="CrispLogo" />
              <span>
                Crisp
                <LogoAccent>
                  <i className="fas fa-chevron-left"></i>
                </LogoAccent>
                Crafts
                <LogoAccent>
                  &#47;
                  <i className="fas fa-chevron-right"></i>
                </LogoAccent>
              </span>
            </Title>
            {
              this.state.fixedNav &&
              <CraftSelector fixedNav={this.state.fixedNav} />
            }
          </TitleSection>
          <NavItems selected={this.props.selected}>
            <NavItem value={0} to={'/'}>Home</NavItem>
            <NavItem value={2} to={'/about'}>About</NavItem>
            <NavItem value={3} to={'/hireme'}>Hire Me</NavItem>
          </NavItems>
        </Container>
      </Wrapper>
    );
  }
}

AppBar.propTypes = {
  currentPage: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.number,
  fixedPosition: PropTypes.number
};

AppBar.defaultProps = {
  currentPage: 'Crafts',
  fixedPosition: 300,
  selected: 0,
};
