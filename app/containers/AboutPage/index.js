import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';

const riseUp = keyframes`
    0% {
    opacity: 0;
    transform: translateY(80%);
    }
    100% {
    opacity: 1;
    transform: translateY(0%);
    }
`;

const Title = styled.div`
  font-size: 2em;
  color: #fff;
`;

const Sub = styled.div`
  margin-top: 24px;
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #fff;
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 24px 24px 24px;
    background: #E53935;
    font-weight: bolder;
    text-align: left;
    font-size: 1.5em;
    color: #ffcdd2;
    animation: ${riseUp} ease-in-out 400ms;
`;

const Link = styled(NavLink)`
  background-size: ${props => props.selected ? '100% 2px, auto' : '0 2px, auto'};
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: linear-gradient(#FFEB3B, #FFEB3B);
  transition: all 200ms ease-in;
  cursor: pointer;
  color: #FFEB3B;
  text-decoration: none;
  &:hover {
    background-size: 100% 2px, auto;
  }
`;

const HighlightSpan = styled.span`
  color: #FFEB3B
`;

const Age = styled.sup`
  font-size: 0.7em;
`;

const Edu = styled.div`
  display: flex;
`;

const DateSection = styled.div`
  max-width: 150px;
  width: 100%;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2Fprofile.jpg?alt=media);
  background-size: cover;
  background-position: 100% 60%;
  border: 5px dashed #ffeb3b;
`;

export default class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      age: this.getAge(new Date(1997, 10, 11)),
    };
  }

  getAge = (dateOfBirth) => {
    let age = new Date(Date.now() - dateOfBirth.getTime());
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <Wrapper>
        <ProfileImage />
        <Title>Hi, my name is Cristian Ponce&nbsp;<Age title={`I'm ${this.state.age} years old`}><HighlightSpan>{this.state.age}</HighlightSpan>YO</Age></Title>
        <div>Just a passionate dev from California that likes to build stuff :)</div>
        <div>Need help with an upcoming project or application? Looking for a new Hire?
        <br/>Have a look through some of my recent <Link to="/">crafts</Link> and consider <Link to="/hireme">hiring me</Link>!</div>
        <Sub>Education</Sub>
        <Edu>
          <DateSection><i className="fas fa-graduation-cap" /> May 2018</DateSection>
          <div>
            <div>Cogswell Polytechnical College</div>
            <div>B.S. Computer Science: emphasis in Software Engineering</div>
          </div>
        </Edu>
        <Edu>
          <DateSection><i className="fas fa-graduation-cap" /> May 2015</DateSection>
          <div>
            <div>Dr. TJ Owens Gilroy Early College Academy</div>
            <div>Received a Highschool Diploma</div>
          </div>
        </Edu>
        <Sub>Achievements / Awards </Sub>
        <Edu>
          <DateSection><i className="fas fa-trophy" /> April 2018</DateSection>
          <div>
            <div>Cogswell Excellence Award: Best Polished Video Game</div>
            <div>Submission: Starman's Voyage</div>
          </div>
        </Edu>
        <Edu>
          <DateSection><i className="fas fa-trophy" /> April 2018</DateSection>
          <div>
            <div>Cogswell Excellence Award: Best Program/App</div>
            <div>Submission: Starman's Voyage</div>
          </div>
        </Edu>
        <Edu>
          <DateSection><i className="fas fa-certificate" /> March 2018</DateSection>
          <div>
            <div>First App published on Google Play Store</div>
            <div>Game: Starman's Voyage</div>
          </div>
        </Edu>
        {
          false &&
          <Sub>Technical Skills <i className="fas fa-code" /></Sub>
        }
        <Sub>Crisp Crafts, wtf?</Sub>
        <div>The name was derived from taking the first part of Cristian and my last initial P</div>
        <div><HighlightSpan>Cris</HighlightSpan>tian <HighlightSpan>P</HighlightSpan>once <HighlightSpan>-&gt;</HighlightSpan> <HighlightSpan>CrisP</HighlightSpan> Crafts</div>
        <div>Pronounced: Cris P <HighlightSpan>-&gt;</HighlightSpan> Crispy <HighlightSpan>-&gt; /</HighlightSpan>ˈkrispē<HighlightSpan>/</HighlightSpan></div>
      </Wrapper>
    );
  }
}
