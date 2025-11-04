import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PlanButton from './planButton'
import { PlanType } from '@/app/constants/planDetails'

const meta: Meta<typeof PlanButton> = {
  component: PlanButton
}

export default meta
type Story = StoryObj<typeof PlanButton>

export const Default: Story = {
  args: {
    plan: PlanType.ARCADE,
    isYearly: false
  }
}

export const Advanced: Story = {
  args: {
    plan: PlanType.ADVANCED,
    isYearly: false
  }
}

export const Pro: Story = {
  args: {
    plan: PlanType.PRO,
    isYearly: false
  }
}
