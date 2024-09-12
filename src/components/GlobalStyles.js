import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgba(220, 192, 192, 0.9);
    font-family: 'Roboto', sans-serif; /* Example font, adjust as needed */
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;