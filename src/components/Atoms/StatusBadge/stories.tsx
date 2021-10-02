import StatusBadge, { StatusBadgeProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from '../Icon'

export default {
  title: 'Design System/Atoms/StatusBadge',
  component: StatusBadge
} as Meta

export const Basic: Story<StatusBadgeProps> = (args) => (
  <StatusBadge {...args}>
    <Icon type="regular" size={40} name="DocumentPdf" variant="primary" />
  </StatusBadge>
)
