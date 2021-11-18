import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
      font-family: 'Poppins', sans-serif;
      overflow: hidden;
  }
`

export default GlobalStyles