import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Title from './title'

const meta: Meta<typeof Title> = {
  component: Title
}

export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    name: 'YOUR_INFO'
  }
}
