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
    font-family: monospace, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Dosis', monospace, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
  
  p,
  label {
    font-family: 'Donsis', serif;
    line-height: 1.5em;
  }

  ::selection {
    background: #FFEA00;
    color: #F44336;
  }
`;
