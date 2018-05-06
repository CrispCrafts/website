import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Preload = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-image: url('${this.props.srcPreload}');
`;

const Loaded = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  opacity: 0;
  transition: opacity 1s ease;
`;

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.imageLodaed = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.imageLodaed.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.imageLodaed.classList.add('iron-image-fade-in');
    }
  };

  render() {
    return (
      <Wrapper>
        <Loaded
          innerRef={imageLoadedElem => this.imageLodaed = imageLodaedElem}
        />
        <Preload
          src={this.props.scrPreload}
        />
      </Wrapper>
    );
  }
}

export default LazyImage;
