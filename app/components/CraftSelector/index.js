import React from 'react';
import styled from 'styled-components';

export default function CraftSelector(props) {
  const selectedCategory = (category) => {
    switch (category) {
      case 'All':
        return 'EVERYTHING'
    }
  }

  const Wrapper = styled.div`
    color: #FFF176;
    height: 100%;
    flex: 1;
    margin-left: 8px;
    font-weight: 800;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: ${props.fixedNav ? 'center' : 'flex-end'};
    align-items: center;
    transition: all 100ms ease in;
    @media (max-width: 700px) {
      align-items: flex-start;
      justify-content: ${props.fixedNav ? 'center' : 'flex-start'};
    }
  `;

  const Arrow = styled.div`
    color: #F9A825;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 700px) {
      display: none;
    }
  `;

  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 8px 12px;
    @media (max-width: 700px) {
      padding: 0;
    }
  `;

  const Text = styled.div`
    padding: 0px 16px;
    @media (max-width: 700px) {
      padding: 0;
    }
  `;

  const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #F9A825;
    margin: 0px 4px;
  `;

  const DotContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    display: ${props.fixedNav ? 'none' : 'flex' };
    @media (max-width: 700px) {
      display: none;
    }
  `;

  return (
    <Wrapper>
      <Title>
        <Arrow><i className="fas fa-caret-left"></i></Arrow>
        <Text>{selectedCategory(props.selectedCategory)}</Text>
        <Arrow style={{ color: '#FFEE58' }}><i className="fas fa-caret-right"></i></Arrow>
      </Title>
      <DotContainer>
        <Dot style={{ background: '#FFEE58' }} />
        <Dot />
        <Dot />
        <Dot />
      </DotContainer>
    </Wrapper>
  );
}

CraftSelector.defaultProps = {
  selectedCategory: 'All',
};
