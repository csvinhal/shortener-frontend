import { useMemo } from 'react'
import styled from 'styled-components'
import icons from './constants'

interface IconProps {
  className?: string
  color?: 'primary' | 'gray' | 'white' | 'silver' | 'black'
  icon: keyof typeof icons
  type?: 'default' | 'rounded'
}

type StyledIconProps = {
  color: 'primary' | 'gray' | 'white' | 'silver' | 'black'
  contrastColor: string
}

const StyledIcon = styled.i<StyledIconProps>`
  display: inline-flex;
  color: rgb(var(${({ theme, color }) => theme.colors[color]}));
  border-radius: 50%;
`

const RoundedIcon = styled(StyledIcon)`
  background-color: rgb(var(${({ contrastColor }) => contrastColor}));
`

const Icon = ({ className, color, icon, type }: IconProps) => {
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
      contrastColor={`--theme-${color}-lighter`}
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
  color: 'gray',
  type: 'default',
}

export default Icon
