import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

export default class CraftCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      overflow: hidden;
      color: ${this.props.color};
      background: ${this.props.themeColor};
      width: 250px;
      height: 350px;
      margin-bottom: 24px;
      border-radius: 4px;
      box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
      position: relative;
      cursor: pointer;
    `;

    const TitleBar = styled.div`
      display: flex;
      align-content: center;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 12px;
    `;

    const Title = styled.div`
      font-size: 1.5em;
      font-weight: bolder;
    `;

    const Horizontal = styled.hr`
      background-color: #FFEB3B;
      width: 50px;
      margin: 3px 0;
      height: 3px;
      border: 0;
    `;

    const SubTitle = styled.div`
      font-size: 1em;
      font-weight: bold;
    `;

    const Image = styled.div`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      transition: all 200ms ease-in;
      background-position: center;
      background-size: cover;
      background-repeat: none;
      opacity: 0.8;
      background-image: linear-gradient(to top, rgba(198, 40, 40, 0.7), rgba(0,0,0,0)), url(${this.props.src});
      ${Wrapper}:hover & {
        transform: scale(1.2);
        opacity: 1;
      }
    `;

    const Content = styled.div`
      padding: 12px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
    `;

    const Summary = styled.div`
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    `;

    return (
      <Wrapper>
        <Image />
        <Content>
          <TitleBar>
            <Title>
              {this.props.title}
            </Title>
            <Horizontal />
            <SubTitle>
              {this.props.subTitle}
            </SubTitle>
          </TitleBar>
          <Summary>{this.props.synopsis}</Summary>
        </Content>
      </Wrapper>
    );
  }
}

CraftCard.defaultProps = {
  title: 'Title',
  subTitle: '',
  synopsis: 'summary',
  themeColor: '#C62828',
  textColor: '#212121',
  color: '#fff',
  actions: null,
};
