import Logo, { LogoProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Logo',
  component: Logo
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
