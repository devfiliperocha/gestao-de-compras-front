import Drawer from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Main from 'components/Pages/Main'

export default {
  title: 'Drawer',
  component: Drawer
} as Meta

export const Basic: Story = () => (
  <Drawer>
    <Main />
  </Drawer>
)
