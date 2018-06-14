import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #C62828;
  }

  body {
    font-family: 'Dosis', monospace, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Dosis', monospace, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  ::selection {
    background: #FFEA00;
    color: #F44336;
  }

  ::-webkit-scrollbar {
      width: 4px;
  }

  ::-webkit-scrollbar-track {
      background: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.2);

  }

  ::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.4); 
  }
`;
