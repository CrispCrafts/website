import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const showFab = keyframes`
    0% {
        width: 0%;
        height: 0%;
        display: none;
        opacity: 0;
        transform: translateY(200%);
    }
    100% {
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 1;
        transform: translateY(0);
    }
`;

const hideFab = keyframes`
    0% {
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        width: 0%;
        height: 0%;
        display: none;
        opacity: 0;
        transform: translateY(200%);
    }
`;

const FabButton = styled.div`
    color: ${props => props.color};
    display: ${props => props.display};
    max-width: ${props => props.size};
    max-height: ${props => props.size};
    box-shadow: ${props => props.showShadow ? '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' : ''};
    background: ${props => props.background};
    z-index: ${props => props.zIndex};
    position: ${props => props.fixed ? 'fixed' : 'absolute'};
    animation: ${props => props.show ? showFab : hideFab} 300ms ease-in;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    right: 2%;
    bottom: 30px;
    transition: all 350ms ease-in;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

class Fab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            show: false,
            fixed: true,
            display: 'none',
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.fab.addEventListener('animationend', this.handleAnimationEnd);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.fab.removeEventListener('animationend', this.handleAnimationEnd);
    }

    handleAnimationEnd = (e) => {
        this.setState({
            display: (this.state.show ? 'flex' : 'none'),
        });
    }

    handleScroll = () => {
        if (window.scrollY > this.props.fixedPosition && !this.state.show) {
            this.setState({
                show: true,
                display: 'flex',
            });
        } else if (window.scrollY <= this.props.fixedPosition && this.state.show) {
            this.setState({
                show: false,
            });
        }
        
        if ((window.pageYOffset > (document.body.scrollHeight - (window.innerHeight + this.props.absolutePosition))) && this.state.fixed) {
            this.setState({
                fixed: false,
            });
        }
        else if ((window.pageYOffset <= (document.body.scrollHeight - (window.innerHeight + this.props.absolutePosition))) && !this.state.fixed) {
            this.setState({
                fixed: true,
            });
        }
    }
    
    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    
    render() {
        return(
            <FabButton
                innerRef={(elem) => {this.fab = elem;}}
                show={this.state.show}
                fixed={this.state.fixed}
                display={this.state.display}
                size={this.props.size}
                zIndex={this.props.zIndex}
                background={this.props.background}
                color={this.props.color}
                showShadow={this.props.showShadow}
                onClick={() => {
                    this.scrollToTop();
                }}
            >
                <i className={`${this.props.iconClassName || 'fas fa-chevron-up'}`}/>
            </FabButton>
        )
    }
}

Fab.defaultProps = {
    size: '48px',
    zIndex: '5',
    background: '#FFEB3B',
    color: '#F57F17',
    showShadow: true,
    iconClassName: '',
    scrollStepInPx: "50",
    delayInMs: "16.66",
    fixedPosition: 300,
    absolutePosition: 50,
};

export default Fab;