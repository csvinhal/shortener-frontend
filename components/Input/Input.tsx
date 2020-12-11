import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const StyledInput = styled.input.attrs(() => ({}))`
  height: 2rem;
  width: 100%;
  padding: 3px 16px;
  border: 1px solid rgb(${(props) => props.theme.colors.silver});
  border-radius: 30px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: 3ms linear;
  transition-property: border, box-shadow;

  :focus {
    outline: none;
    border: 1px solid rgb(${({ theme }) => theme.colors.primaryLight});
  }
`

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => (
    <StyledInput className={className} ref={ref} {...rest} />
  )
)

export default Input
