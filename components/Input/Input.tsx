import cx from 'classnames'
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export enum InputSizeEnum {
  'md' = 'md',
  'lg' = 'lg',
}

type InputSize = keyof typeof InputSizeEnum

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: InputSize
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputSize = InputSizeEnum.md, ...props }: Props, ref) => {
    return (
      <input
        className={cx(styles.input, {
          [styles.inputMd]: inputSize === InputSizeEnum.md,
          [styles.inputLg]: inputSize === InputSizeEnum.lg,
        })}
        ref={ref}
        {...props}
        autoComplete="off"
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
