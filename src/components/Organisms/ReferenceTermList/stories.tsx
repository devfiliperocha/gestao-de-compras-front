import ReferenceTermList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ReferenceTermsMockData } from 'types/reference-term.mock'

export default {
  title: 'Design System/Organisms/ReferenceTermList',
  component: ReferenceTermList,
  argTypes: {
    termsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <ReferenceTermList {...args} termsData={ReferenceTermsMockData} />
)
