import { Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Icon from '../../../components/Icon/Icon'
import Typography from '../../../components/Typography/Typography'

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story<ComponentProps<typeof Icon>> = ({ ...args }) => (
  <Icon {...args} />
)

export const Default = Template.bind({})

Default.args = {
  icon: 'arrowRight',
  color: 'gray',
}

const TemplateRounded: Story<ComponentProps<typeof Icon>> = ({ ...args }) => (
  <Icon {...args} />
)

export const Rounded = TemplateRounded.bind({})

Rounded.args = {
  icon: 'arrowRight',
  color: 'primaryDark',
  contrastColor: 'primaryLighter',
  type: 'rounded',
}

const TemplateAllIcons: Story<ComponentProps<typeof Icon>> = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <Icon icon={'arrowRight'} />
      <Typography color="grayDark" variant="caption" emphasys>
        Icon:{' '}
        <Typography component="span" color="gray" variant="caption">
          arrowRight
        </Typography>
      </Typography>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <Icon icon={'link'} />
      <Typography color="grayDark" variant="caption" emphasys>
        Icon:{' '}
        <Typography component="span" color="gray" variant="caption">
          link
        </Typography>
      </Typography>
    </div>
  </div>
)

export const AllIcons = TemplateAllIcons.bind({})
