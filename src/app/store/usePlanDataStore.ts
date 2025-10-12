import { create } from 'zustand'

interface PlanDataState {
  plan: 'ARCADE' | 'ADVANCED' | 'PRO' | null
  addonServices: string[]
  isYearly: boolean
  setPlan: (plan: 'ARCADE' | 'ADVANCED' | 'PRO') => void
  toggleBillingCycle: () => void
}

export const usePlanDataStore = create<PlanDataState>((set) => ({
  plan: null,
  addonServices: [],
  isYearly: true,
  setPlan: (plan) => set({ plan }),
  toggleBillingCycle: () => set((state) => ({ isYearly: !state.isYearly }))
}))
