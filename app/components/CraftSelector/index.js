import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {categories} from 'utils/mock-projects';

const Bounce = keyframes`
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  
  from,
  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
`;

const Wrapper = styled.div`
  color: #FFF176;
  height: 100%;
  flex: 1;
  font-weight: 800;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.fixedNav ? 'center' : 'flex-end'};
  align-items: center;
  transition: all 100ms ease in;
  @media (max-width: 700px) {
    margin-left: ${props => props.fixedNav ? '8px' : '0px'};
    align-items: flex-start;
    justify-content: ${props => props.fixedNav ? 'center' : 'flex-start'};
  }
`;

const Arrow = styled.div`
  color: #FFEE58;
  margin: 0 auto;
  font-size: 2em;
  text-align: center;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const Text = styled.div`
  padding: 0px 16px;
  min-width: 200px;
  text-align: center;
  animation: ${props => props.bounce ? Bounce : ''};
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  @media (max-width: 700px) {
    min-width: 100px;
    padding: 0;
  }
`;

const DotList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: ${props => props.fixedNav ? 'none' : 'inline-block' };
  @media (max-width: 700px) {
    display: none;
  }
`;

const DotA = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  background-color: ${props => props.selected ? '#FFEE58' : '#F9A825'};
  text-indent: -999em; /* make the text accessible to screen readers */
  cursor: pointer;
  position: absolute;
  -webkit-transition: -webkit-transform 0.3s ease, background-color 0.3s ease;
  transition: transform 0.3s ease, background-color 0.3s ease;
  transform: ${props => props.selected ? 'scale(1.5)' : ''};
  &:hover,
  &:focus {
    background-color: #FFEE58;
  }
  &:focus {
    outline: none;
  }
`;

const DotLi = styled.li`
	position: relative;
	display: block;
	float: left;
	margin: 8px 12px;
	width: 8px;
	height: 8px;
  cursor: pointer;
`;

export default class CraftSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounce: true,
    };
  }

  componentDidMount() {
    this.text.addEventListener('animationend', this.handleTextEnd);
  }

  componentWillUnmount() {
    this.text.removeEventListener('animationend', this.handleTextEnd);
  }

  handleTextEnd = () => {
    this.setState({
      bounce: false,
    });
  }

  selectedCategory = (category) => {
    switch (category) {
      case 'All':
        return 'EVERYTHING';
      case 'IoT':
        return 'I O T';
      default:
        return category.toUpperCase();
    }
  }

  moveNext = (next) => {
    let currentIndex = categories.indexOf(this.props.category);
    if (next) {
      if (currentIndex < categories.length - 1) {
        this.setState({
          bounce: true,
        });
        this.props.onChangeCategory(categories[currentIndex + 1]);
      } else {
        this.setState({
          bounce: true,
        });
        this.props.onChangeCategory(categories[0]);
      }
    } else {
      if (currentIndex > 0) {
        this.setState({
          bounce: true,
        });
        this.props.onChangeCategory(categories[currentIndex - 1]);
      } else {
        this.setState({
          bounce: true,
        });
        this.props.onChangeCategory(categories[categories.length - 1]);
      }
    }
  }

  generateDots = () => {
    return categories.map((c, indx) => {
    return (
        <DotLi
          key={c}
          onClick={() => {
            if(c !== this.props.category) {
              this.setState({
                bounce: true,
              });
              this.props.onChangeCategory(categories[indx]);
            }
          }}>
          <DotA selected={c === this.props.category} />
        </DotLi>
      );
    });
  }

  render() {
    return (
      <Wrapper
        fixedNav={this.props.fixedNav}>
        <Title>
          <Arrow onClick={() => this.moveNext(false)}>
            <i className="fas fa-caret-left" />
          </Arrow>
          <Text innerRef={(text) => this.text = text} bounce={this.state.bounce}>{this.selectedCategory(this.props.category)}</Text>
          <Arrow onClick={() => this.moveNext(true)}>
            <i className="fas fa-caret-right" />
          </Arrow>
        </Title>
        <DotList
          fixedNav={this.props.fixedNav}>
          {this.generateDots()}
        </DotList>
      </Wrapper>
    );
  }
}
