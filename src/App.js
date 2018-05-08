import React, { Component } from 'react';
import logo from './Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CrispCrafts</h1>
          <h3 className="Name">Cristian Ponce</h3>
          <h3 className="Statement">Just an indie dev/student from California that likes to build stuff</h3>
          <h3 className="PS">Graduating May 2018 - Hire Me</h3>
          <h3><a href="http://develop.crispcrafts.com">Actual site is still under development<br/>feel free to check it out though!</a></h3>
        </header>
        <div className="App-intro">
          <div className="Section">
            <h1><span className="highlight">&lt;</span>Crafts<span className="highlight">&#47;&gt;</span></h1>
            <a target="blank" href="https://play.google.com/store/apps/details?id=com.CrispCrafts.StarmansVoyage">Starman's Voyage</a>
            <a target="blank" href="https://github.com/Cristian006/ReactiveMirror">Reactive Mirror</a>
            <a target="blank" href="https://colors.crispcrafts.com">Color Tools</a>
            <a target="blank" href="https://characters.crispcrafts.com">Ascii Tools</a>
          </div>
          <div className="Section">
            <h1>Hire Me</h1>
            <a target="blank" href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.pdf?alt=media">Resume - PDF</a>
            <a target="blank" href="https://firebasestorage.googleapis.com/v0/b/crispcrafts-19cf6.appspot.com/o/resume%2FCristianPonceResume.docx?alt=media">Resume - DOCX</a>
          </div>
        </div>
        <div className="social" style={{fontSize: '1.5em'}}>
          <a href="mailto:cristianrponce06@gmail.com"><i class="fas fa-envelope"></i></a>
          <a target="blank" href="https://github.com/Cristian006"><i class="fab fa-github"></i></a>
          <a target="blank" href="https://www.linkedin.com/in/cristian-ponce006/"><i class="fab fa-linkedin"></i></a>
        </div>
        <div className="copy">CrispCrafts &copy; 2018 </div>
      </div>
    );
  }
}

export default App;
