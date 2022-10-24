import cx from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

export enum ButtonVariantEnum {
  'solid' = 'solid',
  'ghost' = 'ghost',
}

export enum ButtonSizeEnum {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
}

type ButtonVariant = keyof typeof ButtonVariantEnum

type ButtonSize = keyof typeof ButtonSizeEnum

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

const Button = ({
  children,
  size = ButtonSizeEnum.md,
  variant = ButtonVariantEnum.solid,
  ...buttonProps
}: Props) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.sizeSm]: size === ButtonSizeEnum.sm,
        [styles.sizeMd]: size === ButtonSizeEnum.md,
        [styles.sizeLg]: size === ButtonSizeEnum.lg,
        [styles.buttonSolid]: variant === ButtonVariantEnum.solid,
        [styles.buttonGhost]: variant === ButtonVariantEnum.ghost
      })}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
