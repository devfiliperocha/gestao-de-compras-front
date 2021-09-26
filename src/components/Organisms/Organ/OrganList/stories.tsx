import OrganList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { OrgansMockData } from 'types/organ.mock'

export default {
  title: 'Design System/Organisms/OrganList',
  component: OrganList,
  argTypes: {
    organsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <OrganList {...args} organsData={OrgansMockData} />
)
