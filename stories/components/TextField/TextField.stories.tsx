import { Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Icon from '../../../components/Icon/Icon'
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
      startAdornment={<Icon color="primaryDark" icon="link" />}
      {...args}
    />

    <TextField
      className="mb-2"
      endAdornment={<Icon color="primaryDark" icon="link" />}
      {...args}
    />

    <TextField
      className="mb-2"
      startAdornment={
        <Icon
          color="primaryDark"
          contrastColor="primaryLighter"
          icon="link"
          type="rounded"
        />
      }
      {...args}
    />

    <TextField
      endAdornment={
        <Icon
          color="primaryDark"
          contrastColor="primaryLighter"
          icon="arrowRight"
          type="rounded"
        />
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
