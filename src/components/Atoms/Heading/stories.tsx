import Heading, { HeadingProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = {
  children: 'H1'
}
