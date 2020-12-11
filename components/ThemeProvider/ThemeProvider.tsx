import { ReactNode } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { Theme } from '../../models/theme'

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-silver: 212, 218, 224;
    --theme-primary: 33, 150, 243;
    --theme-primary-light: 110, 198, 255;
    --theme-secundary: 255, 87, 34;
    --theme-secundaryLight: 255, 138, 80;
    --theme-black: 0,0,0;
    --theme-gray: 158, 158, 158;
    --theme-dark-gray: 66, 66, 66;
    --theme-white: 255, 255, 255;

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
    color: rgba(var(--theme-black), 0.87);
  }

  .w-100 {
    width: 100%;
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

export const theme: Theme = {
  colors: {
    primary: 'var(--theme-primary)',
    primaryLight: 'var(--theme-primary-light)',
    silver: 'var(--theme-silver)',
    gray: 'var(--theme-gray)',
    darkGray: 'var(--theme-dark-gray)',
    white: 'var(--theme-white)',
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
