import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PlanButton from './planButton'

const meta: Meta<typeof PlanButton> = {
  component: PlanButton
}

export default meta
type Story = StoryObj<typeof PlanButton>

export const Default: Story = {
  args: {
    plan: 'ARCADE',
    isYearly: false
  }
}

export const Advanced: Story = {
  args: {
    plan: 'ADVANCED',
    isYearly: false
  }
}

export const Pro: Story = {
  args: {
    plan: 'PRO',
    isYearly: false
  }
}
