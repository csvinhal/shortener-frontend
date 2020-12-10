import { ReactNode } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #353535;
  }
`

export const theme = {
  colors: {
    capri: '#00baff',
    dimgray: '#686868',
    jet: '#353535',
    white: '#fefefe',
  },
}

interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </>
  )
}

export default ThemeProvider
