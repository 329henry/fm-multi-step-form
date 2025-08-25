import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import NavigationList from './navigationList'

const meta: Meta<typeof NavigationList> = {
  component: NavigationList
}

export default meta
type Story = StoryObj<typeof NavigationList>

export const Default: Story = {
  args: {}
}
