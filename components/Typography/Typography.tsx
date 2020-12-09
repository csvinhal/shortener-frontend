import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: 'heading' | 'subheading' | 'body' | 'caption'
  color?: 'capri' | 'jet' | 'dimgray'
  emphasys?: boolean
}

interface BaseComponentProps {
  color: 'capri' | 'jet' | 'dimgray'
  emphasys?: boolean
}

const BaseComponent = styled('p')<BaseComponentProps>`
  margin: 0;
  color: ${(props) => props.theme.colors[props.color]};
  font-weight: ${(props) => (props.emphasys ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
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
`

interface SubHeadingProps {
  level?: number
}

export const SubHeading = styled(BaseComponent).attrs<SubHeadingProps>(
  ({ level }) => ({
    role: 'heading',
    'aria-level': level || 2,
  })
)<HeadingProps>`
  font-size: 3rem;
`

export const Caption = styled(BaseComponent)<BaseComponentProps>`
  font-size: 0.75rem;
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
