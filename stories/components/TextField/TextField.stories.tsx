import { Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Icon from '../../../components/Icon/Icon'
import IconButton from '../../../components/IconButton/IconButton'
import TextField from '../../../components/TextField/TextField'

export default {
  title: 'TextField',
  component: TextField,
}

const Template: Story<ComponentProps<typeof TextField>> = ({ ...args }) => (
  <div style={{ maxWidth: '360px' }}>
    <TextField {...args} />
  </div>
)
// Each story then reuses that template
export const Default = Template.bind({})

Default.args = {
  placeholder: 'Type something',
}

const TemplateWithIcons: Story<ComponentProps<typeof TextField>> = ({
  ...args
}) => (
  <div style={{ maxWidth: '360px' }}>
    <TextField
      className="mb-2"
      startAdornment={<Icon color="primary" icon="link" />}
      {...args}
    />

    <TextField
      className="mb-2"
      endAdornment={<Icon color="primary" icon="link" />}
      {...args}
    />

    <TextField
      className="mb-2"
      startAdornment={<Icon color="primary" icon="link" type="rounded" />}
      {...args}
    />

    <TextField
      className="mb-2"
      endAdornment={<Icon color="primary" icon="arrowRight" type="rounded" />}
      {...args}
    />

    <TextField
      className="mb-2"
      startAdornment={
        <IconButton color="primary">
          <Icon icon="link" />
        </IconButton>
      }
      {...args}
    />

    <TextField
      className="mb-2"
      startAdornment={
        <IconButton color="primary" variant="outlined">
          <Icon icon="link" />
        </IconButton>
      }
      {...args}
    />
  </div>
)
// Each story then reuses that template
export const WithIcons = TemplateWithIcons.bind({})

WithIcons.args = {
  placeholder: 'Type something',
}
