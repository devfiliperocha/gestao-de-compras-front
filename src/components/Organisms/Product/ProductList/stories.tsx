import ProductList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ProductsMockData } from 'types/product.mock'

export default {
  title: 'Design System/Organisms/ProductList',
  component: ProductList,
  argTypes: {
    productsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <ProductList {...args} productsData={ProductsMockData} />
)
