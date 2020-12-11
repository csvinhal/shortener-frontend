export type TTheme = {
  colors: {
    primaryDark: string
    primary: string
    primaryLight: string
    primaryLighter: string
    grayDark: string
    gray: string
    grayLight: string
    grayLighter: string
    white: string
    silver: string
  }
}

export type TThemeColors = keyof TTheme['colors']
