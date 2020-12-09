import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styles from '../styles.css'

const GlobalStyle = createGlobalStyle(styles)

// This default export is required in a new `pages/_app.js` file.
export const theme = {
  colors: {
    capri: 'var(--theme-capri)',
    dimgray: 'var(--theme-dimgray)',
    jet: 'var(--theme-jet)',
    white: 'var(--theme-white)',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
