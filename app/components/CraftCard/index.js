import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

export default class CraftCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      overflow: hidden;
      color: ${this.props.color};
      max-width: 300px;
      width: 100%;
      margin-bottom: 24px;
      border-radius: 4px;
      box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
    `;

    const TitleBar = styled.div`
      height: 50px;
      padding: 0 12px;
      display: flex;
      align-content: center;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom: 1px solid rgba(0,0,0,0.5);
      background: ${this.props.themeColor};
    `;

    const Title = styled.div`
      font-size: 16px;
    `;

    const SubTitle = styled.div`
      font-size: 12px;
    `;

    const Image = styled.div`
      width: 100%;
      height: 300px;
      background-position: cover;
      background-repeat: none;
      background-color: #424242;
      background-image: url(${this.props.src});
    `;

    const Content = styled.div`
      width: 100%;
      padding: 12px;
      border-top: 1px solid rgba(0,0,0,0.5);
      background: ${this.props.themeColor};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    `;

    const Summary = styled.div`
      font-size: 16px;
    `;

    const Actions = styled.div`
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
    `;

    return (
      <Wrapper>
        <TitleBar>
          <Title>
            {this.props.title}
          </Title>
          <SubTitle>
            {this.props.subTitle}
          </SubTitle>
        </TitleBar>
        <Image />
        <Content>
          <Summary>{this.props.synopsis}</Summary>
          <Actions>{this.props.actions}</Actions>
        </Content>
      </Wrapper>
    );
  }
}

CraftCard.defaultProps = {
  title: 'Title',
  subTitle: '',
  synopsis: 'summary',
  themeColor: '#5F6368',
  textColor: '#3C4043',
  color: 'white',
  actions: null,
};
