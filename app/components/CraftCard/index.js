import React from 'react';
import { withRouter } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';

export class CraftCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  generateTech = (t, indx, arr) => indx === arr.length - 1 ? `${t}` : `${t}, `;

  showMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  render() {
    const pullDown = keyframes`
      0%{transform:translateY(25%)}
      100%{transform:translateY(-25%)}
    `;

    const pullUp = keyframes`
      0%{transform:translateY(-25%)}
      100%{transform:translateY(25%)}
    `;

    const Wrapper = styled.div`
      user-select: none;
      margin: 0 auto;
      overflow: hidden;
      color: ${this.props.color};
      background: ${this.props.theme};
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
      transition: all ease-in 200ms;
      ${Wrapper}:hover & {
        width: 50%;
      }
    `;

    const SubTitle = styled.div`
      font-size: 1em;
      font-weight: bold;
      font-style: italic;
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
      bottom: ${this.state.showMore ? '100%' : '0'};
      left: 0;
      right: 0;
      position: absolute;
      padding-bottom: 30px;
      transition: bottom 1s ease-in;
    `;

    const Summary = styled.div`
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    `;

    const ArrowButton = styled.div`
      height: 24px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
    `;

    const Icon = styled.i`
      color: #FFEB3B;
      font-size: 18px;
      margin-left: 8px;
      ${Wrapper}:hover & {
        animation: ${this.state.showMore ? pullUp : pullDown} 500ms cubic-bezier(.165,.84,.44,1) infinite;
      }
    `;

    const More = styled.div`
      top: ${this.state.showMore ? '0%' : '100%'};
      background-color: ${this.props.theme};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transition: top 1s ease-in;
    `;

    return (
      <Wrapper
        onClick={() => {
          this.props.history.push(`/crafts/${this.props.key}`)
        }}
      >
        <Image />
        <Content>
          <TitleBar>
            <Title>
              {this.props.title}
            </Title>
            <Horizontal />
            <SubTitle>
              {this.props.technologies.map(this.generateTech)}
            </SubTitle>
          </TitleBar>
          <Summary>{this.props.sub}</Summary>
        </Content>
        <More>
          {this.props.title}
        </More>
        <ArrowButton
          onClick={(e) => {
            e.stopPropagation();
            this.showMore();
          }}
        >
          <Icon className={`fas fa-chevron-${this.state.showMore ? 'down' : 'up'}`} />
        </ArrowButton>
      </Wrapper>
    );
  }
}

CraftCard.defaultProps = {
  key: '',
  title: 'Title',
  sub: '',
  tags: [],
  technologies: [],
  theme: '#C62828',
  textColor: '#212121',
  color: '#fff',
  src: '',
};

export default withRouter(CraftCard);
