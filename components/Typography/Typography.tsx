import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

type HeadersMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type ComponentMapping = HeadersMapping | 'p' | 'span'

type ColorsMapping = 'capri' | 'jet' | 'dimgray' | 'white'

interface Props {
  className?: string
  children: ReactNode
  component?: ComponentMapping
  variant?: 'heading' | 'subheading' | 'body' | 'caption'
  color?: ColorsMapping
  emphasys?: boolean
}

interface BaseComponentProps {
  color: ColorsMapping
  emphasys?: boolean
}

const BaseComponent = styled('p')<BaseComponentProps>`
  margin: 0;
  color: ${(props) => props.theme.colors[props.color]};
  font-weight: ${(props) => (props.emphasys ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
`

interface HeadingProps {
  as: ComponentMapping
  level?: number
}

export const Heading = styled(BaseComponent).attrs<HeadingProps>(({ as }) => {
  if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as)) {
    return {
      role: 'heading',
      'aria-level': 1,
    }
  }
})<HeadingProps>`
  font-size: 3.75rem;
  line-height: 1.167;
  letter-spacing: -0.01562em;
`

interface SubHeadingProps {
  as: ComponentMapping
  level?: number
}

export const SubHeading = styled(BaseComponent).attrs<SubHeadingProps>(
  ({ as }) => {
    if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as)) {
      return {
        role: 'heading',
        'aria-level': 2,
      }
    }
  }
)<SubHeadingProps>`
  font-size: 2.125rem;
  line-height: 1.167;
  letter-spacing: 0em;
`

export const Body = styled(BaseComponent)<BaseComponentProps>`
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`

export const Caption = styled(BaseComponent)<BaseComponentProps>`
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`

const Typography = ({
  className,
  children,
  component,
  variant,
  emphasys,
  color,
}: Props) => {
  const Component = useMemo(() => {
    switch (variant) {
      case 'heading':
        return Heading
      case 'subheading':
        return SubHeading
      case 'body':
        return Body
      case 'caption':
        return Caption
      default:
        return BaseComponent
    }
  }, [component])

  return (
    <Component
      className={className}
      as={component}
      color={color}
      emphasys={emphasys}
    >
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  component: 'p',
  variant: 'body',
  color: 'jet',
  emphasys: false,
}

export default Typography
