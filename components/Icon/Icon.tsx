import { useMemo } from 'react'
import styled from 'styled-components'
import { TThemeColors } from '../ThemeProvider/constants'
import icons from './constants'

interface IconProps {
  className?: string
  color?: TThemeColors
  icon: keyof typeof icons
  type?: 'default' | 'rounded'
  contrastColor?: TThemeColors
}

type StyledIconProps = {
  color: TThemeColors
  contrastColor: TThemeColors
}

const StyledIcon = styled.i<StyledIconProps>`
  display: inline-flex;
  color: rgb(${({ theme, color }) => theme.colors[color]});
  border-radius: 50%;
`

const RoundedIcon = styled(StyledIcon)`
  background-color: rgb(
    ${({ theme, contrastColor }) => theme.colors[contrastColor]}
  );
`

const Icon = ({ className, color, icon, type, contrastColor }: IconProps) => {
  const Component = useMemo(() => {
    switch (type) {
      case 'rounded':
        return RoundedIcon
      case 'default':
        return StyledIcon
    }
  }, [type])
  return (
    <Component
      className={className}
      color={color}
      contrastColor={contrastColor}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        {icons[icon]}
      </svg>
    </Component>
  )
}

Icon.defaultProps = {
  color: 'grayDark',
  contrastColor: 'grayLight',
  type: 'default',
}

export default Icon
