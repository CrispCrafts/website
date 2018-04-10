import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import chip from '../../images/chip.png';
import NavItems from './NavItems';
import NavItem from './NavItem';
import CraftSelector from 'components/CraftSelector';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNav: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = () => {
    if (window.scrollY > this.props.fixedPosition && !this.state.fixedNav) {
      this.setState({
        fixedNav: true,
      });
    } else if (window.scrollY < this.props.fixedPosition && this.state.fixedNav) {
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
      box-shadow: ${this.state.fixedNav ? '0 1px 1px rgba(0,0,0,.15)' : ''};
      background-color: ${this.state.fixedNav ? '#C62828' : '#E53935'};
      transition: all 100ms ease-in;
      animation: ${this.state.fixedNav ? `${slideDown} 420ms cubic-bezier(.165,.84,.44,1)` : ''};
    `;

    const Container = styled.div`
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: ${this.state.fixedNav ? 'center' : 'flex-start'};
      margin: 0 auto;
      padding: ${this.state.fixedNav ? '0 4vw' : '20px 4vw'};
    `;

    const TitleSection = styled.div`
      display: flex;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      flex: 1;
    `;

    const Title = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: center;
      font-size: 24px;
      font-weight: 800;
      opacity: ${this.state.fixedNav ? 1 : 0};
      height: ${this.state.fixedNav ? 'auto' : '100%'};
      transition: all ease-in 2s;
    `;

    const Logo = styled.img`
      width: 36px;
      margin-right: 12px;
    `;

    const LogoAccent = styled.span`
      color: #FFF176;
    `;

    return (
      <Wrapper>
        <Container>
          <TitleSection>
            <Title>
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
            <NavItem value={0}>Home</NavItem>
            <NavItem value={2}>About</NavItem>
            <NavItem value={3}>Hire Me</NavItem>
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
};

/*
 * box-shadow: ${this.state.fixedNav ? '0 1px 1px rgba(0,0,0,.15)' : ''};
 * border-bottom: ${this.state.fixedNav ? '' : '1px solid #D32F2F'};
 */

 /**
  *   const Wrapper = styled.div`
      z-index: 1000;
      padding: 0;
      top: 0;
      position: ${this.state.fixedNav ? 'fixed' : 'absolute'};
      width: 100%;
      height:${this.state.fixedNav ? '70px' : '150px'};
      color: white;
      background-color: #E53935;
      transition: all 100ms ease-in;
      animation: ${this.state.fixedNav ? `${slideDown} 420ms cubic-bezier(.165,.84,.44,1)` : ''};
  `;
*/
