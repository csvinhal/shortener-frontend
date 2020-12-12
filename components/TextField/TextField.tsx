import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: text;
  display: inline-flex;
`

const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;

  > :first-child {
    padding: 8px;
  }
`

const StyledLeftIcon = styled(StyledIcon)`
  left: 4px;
`

const StyledRightIcon = styled(StyledIcon)`
  right: 4px;
`

type StylesTextFieldProps = {
  hasStartAdornment?: boolean
  hasEndAdornment?: boolean
}

const StyledTextField = styled.input<StylesTextFieldProps>`
  height: 3rem;
  width: 100%;
  padding: ${(props) => {
    if (props.hasStartAdornment) {
      return '1rem 1rem 1rem 3rem'
    } else if (props.hasEndAdornment) {
      return '1rem 3rem 1rem 1rem'
    }
    return '1rem'
  }};
  border: 1px solid rgb(var(${(props) => props.theme.colors.silver}));
  border-radius: 3rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: 3ms linear;
  transition-property: border, box-shadow;

  :focus {
    outline: none;
    border: 1px solid rgb(var(${({ theme }) => theme.colors.primaryLight}));
  }
`

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, startAdornment, endAdornment, ...rest }, ref) => (
    <StyledContainer className={className}>
      {startAdornment ? (
        <StyledLeftIcon>{startAdornment}</StyledLeftIcon>
      ) : null}
      <StyledTextField
        ref={ref}
        hasStartAdornment={!!startAdornment}
        hasEndAdornment={!!endAdornment}
        {...rest}
      />
      {endAdornment ? <StyledRightIcon>{endAdornment}</StyledRightIcon> : null}
    </StyledContainer>
  )
)

export default TextField
