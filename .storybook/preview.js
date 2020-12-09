import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../pages/_app'
import styles from '../styles.css'

const GlobalStyle = createGlobalStyle(styles)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
]
