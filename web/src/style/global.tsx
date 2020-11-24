import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`