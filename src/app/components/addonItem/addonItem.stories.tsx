import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import AddonItem from './addonItem'

const meta: Meta<typeof AddonItem> = {
  component: AddonItem
}

export default meta
type Story = StoryObj<typeof AddonItem>

export const Default: Story = {
  args: {
    item: 'ONLINE_SERVICE',
    isYearly: false
  }
}
