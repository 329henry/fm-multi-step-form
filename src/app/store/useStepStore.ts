import { create } from 'zustand'
import { TStep } from '@components/stepLabel/stepLabel'

interface StepState {
  currentStep: TStep
  setStep: (currentStep: TStep) => void
}

export const useStepStore = create<StepState>((set) => ({
  currentStep: 'YOUR_INFO',
  setStep: (currentStep) => set({ currentStep })
}))
