import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  children: ReactNode
  color?: 'primary' | 'gray' | 'white' | 'silver' | 'black'
  variant?: 'solid' | 'outlined'
}

type StyledButtonProps = {
  color: 'primary' | 'gray' | 'white' | 'silver' | 'black'
  variant: 'solid' | 'outlined'
}

const StyledButton = styled.button<StyledButtonProps>`
  flex: 0 0 auto;
  color: rgb(var(${({ theme, color }) => theme.colors[color]}));
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: var(--transition);
  transition-property: background-color;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ color, variant }) => {
    if (variant === 'solid') {
      return `rgb(var(--theme-${color}-lighter))`
    }

    return 'transparent'
  }};

  :focus,
  :hover {
    background-color: rgb(
      var(
        ${({ color, variant }) => {
          if (variant === 'solid') {
            return `--theme-${color}-dark`
          }
          return `--theme-${color}-lighter`
        }}
      )
    );
  }
`

const IconButton = forwardRef<HTMLInputElement, ButtonProps>(
  ({ children, color, variant, ...rest }, ref) => (
    <StyledButton color={color} variant={variant} {...rest} ref={ref}>
      {children}
    </StyledButton>
  )
)

IconButton.defaultProps = {
  color: 'gray',
  variant: 'solid',
}

export default IconButton
