import { Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Icon from '../../../components/Icon/Icon'
import IconButton from '../../../components/IconButton/IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
}

const Template: Story<ComponentProps<typeof IconButton>> = ({ ...args }) => (
  <div style={{ maxWidth: '360px' }}>
    <IconButton {...args}>
      <Icon icon="arrowRight" />
    </IconButton>
  </div>
)
// Each story then reuses that template
export const Default = Template.bind({})
