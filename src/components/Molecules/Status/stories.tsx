import Status, { StatusProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Molecules/Status',
  component: Status,
  args: {
    text: 'Aguardando...',
    type: 'warning'
  }
} as Meta

export const Basic: Story<StatusProps> = (args) => <Status {...args} />
