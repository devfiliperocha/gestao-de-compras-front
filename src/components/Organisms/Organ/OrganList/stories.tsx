import OrganList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { OrgansMockData } from 'types/organ.mock'
import { Container } from '@material-ui/core'

export default {
  title: 'Design System/Organisms/OrganList',
  component: OrganList,
  argTypes: {
    organsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <Container maxWidth="lg">
    <OrganList {...args} organsData={OrgansMockData} />
  </Container>
)
