import DashboardCard, { DashboardCardProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Molecules/DashboardCard',
  component: DashboardCard,
  args: {
    icon: 'VehicleTruckProfile',
    title: 'Fornecedores'
  }
} as Meta

export const Basic: Story<DashboardCardProps> = (args) => (
  <DashboardCard {...args} />
)
