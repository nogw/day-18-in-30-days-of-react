import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f1f3f9;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle