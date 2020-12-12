import { Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Typography from '../../../components/Typography/Typography'

export default {
  title: 'Typograpgy',
  component: Typography,
}

const Template: Story<ComponentProps<typeof Typography>> = ({ ...args }) => (
  <Typography {...args}>This is a exemple of typography</Typography>
)

// Each story then reuses that template
export const Default = Template.bind({})

const VariationsTemplate: Story<ComponentProps<typeof Typography>> = () => (
  <>
    <Typography component="h1" color="primary" variant="heading" emphasys>
      A
    </Typography>
    <Typography component="h2" color="black" variant="subheading" emphasys>
      BEBAS NEUE
    </Typography>
    <Typography color="gray">BOLD</Typography>
    <Typography color="gray">
      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    </Typography>
    <Typography color="gray" variant="caption">
      1 2 3 4 5 6 7 8 9 0 ()
    </Typography>
  </>
)

export const Variations = VariationsTemplate.bind({})
