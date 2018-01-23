import React, { Component } from 'react';
import './App.css';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppFooter from './components/AppFooter/AppFooter';
import AppSidebar from './components/AppSidebar/AppSidebar';
import KeyCodes from './components/KeyCodes/KeyCodes';
import Item from './components/AppSidebar/Item/Item';
import AsciiCodes from './components/AsciiCodes/AsciiCodes';
import AppPageContainer from './components/AppPageContainer/AppPageContainer';
import AppPage from './components/AppPage/AppPage';
import AsciiArt from './components/AsciiArt/AsciiArt';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <AppToolbar title="Characters"/>
          <AppSidebar
            onSelectedChange={(indx) => {
              this.setState({
                currentPage: indx
              });
            }}
            value={this.state.currentPage}>
            <Item
              value={0}
              icon="keyboard"
              title={<span>Key<br/>Codes</span>} />
            <Item
              value={1}
              icon="text_format"
              title="ASCII" />
            <Item
              value={2}
              icon="format_size"
              //icons={['format_size', 'forward', 'font_download']}
              title="ASCII" />
          </AppSidebar>
          <AppPageContainer value={this.state.currentPage}>
            <AppPage value={0}>
              <KeyCodes></KeyCodes>
            </AppPage>
            <AppPage value={1}>
              <AsciiCodes></AsciiCodes>
            </AppPage>
            <AppPage value={2}>
              <AsciiArt></AsciiArt>
            </AppPage>
          </AppPageContainer>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
