import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PlanButton from './planButton'

const meta: Meta<typeof PlanButton> = {
  component: PlanButton
}

export default meta
type Story = StoryObj<typeof PlanButton>

export const Default: Story = {
  args: {
    plan: {
      name: 'Arcade',
      price: '$9/mo'
    }
  }
}

export const Advanced: Story = {
  args: {
    plan: {
      name: 'Advanced',
      price: '$12/mo'
    }
  }
}

export const Pro: Story = {
  args: {
    plan: {
      name: 'Pro',
      price: '$15/mo'
    }
  }
}
