import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import AddonItem from './addonItem'
import { AddonType } from '@/app/constants/addonData'

const meta: Meta<typeof AddonItem> = {
  component: AddonItem
}

export default meta
type Story = StoryObj<typeof AddonItem>

export const Default: Story = {
  args: {
    item: AddonType.ONLINE_SERVICE,
    isYearly: false
  }
}
