export type TTheme = {
  colors: {
    primary: string
    primaryLight: string
    gray: string
    grayLight: string
    white: string
    silver: string
    black: string
  }
}

export type TThemeColors = keyof TTheme['colors']
