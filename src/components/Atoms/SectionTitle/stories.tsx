import SectionTitle, { SectionTitleProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/SectionTitle',
  component: SectionTitle
} as Meta

export const Basic: Story<SectionTitleProps> = (args) => (
  <SectionTitle {...args}>Title</SectionTitle>
)
