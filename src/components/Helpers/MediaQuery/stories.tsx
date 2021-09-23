import MediaQuery from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Helpers/MediaQuery',
  component: MediaQuery
} as Meta

export const Desktop: Story = () => (
  <MediaQuery greaterThan="medium">Only on Desktop</MediaQuery>
)
export const Mobile: Story = () => (
  <MediaQuery lessThan="medium">Only on Mobile</MediaQuery>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
