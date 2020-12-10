import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

type ColorsMapping = 'capri' | 'jet' | 'dimgray' | 'white'

interface Props {
  children: ReactNode
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
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
  level?: number
}

export const Heading = styled(BaseComponent).attrs<HeadingProps>(
  ({ level }) => ({
    role: 'heading',
    'aria-level': level || 1,
  })
)<HeadingProps>`
  font-size: 6rem;
  line-height: 1.167;
  letter-spacing: -0.01562em;
`

interface SubHeadingProps {
  level?: number
}

export const SubHeading = styled(BaseComponent).attrs<SubHeadingProps>(
  ({ level }) => ({
    role: 'heading',
    'aria-level': level || 2,
  })
)<SubHeadingProps>`
  font-size: 3rem;
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
    <Component as={component} color={color} emphasys={emphasys}>
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
