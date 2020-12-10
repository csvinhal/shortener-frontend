import { ReactNode } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --space-1: 0.5rem;
    --space-2: 1rem;
    --space-3: 1.5rem;
    --space-4: 2rem;  
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #353535;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .mb-1 {
    margin-bottom: var(--space-1);
  }

  .mb-2 {
    margin-bottom: var(--space-2);
  }

  .mb-3 {
    margin-bottom: var(--space-3);
  }

  .mb-4 {
    margin-bottom: var(--space-4);
  }

  .pb-0 {
    padding-bottom: 0;
  }

  .pb-1 {
    padding-bottom: var(--space-1);
  }

  .pb-2 {
    padding-bottom: var(--space-2);
  }

  .pb-3 {
    padding-bottom: var(--space-3);
  }

  .pb-4 {
    padding-bottom: var(--space-4);
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
