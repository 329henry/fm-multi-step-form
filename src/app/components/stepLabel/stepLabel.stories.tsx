import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import StepLabel from './stepLabel'

const meta: Meta<typeof StepLabel> = {
  component: StepLabel
}

export default meta
type Story = StoryObj<typeof StepLabel>

export const Default: Story = {
  args: {
    step: 'YOUR_INFO',
    currentStep: 'YOUR_INFO'
  }
}
