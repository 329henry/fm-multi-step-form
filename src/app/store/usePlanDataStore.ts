import { create } from 'zustand'
import { addonData } from '@constants/addonData'

interface PlanDataState {
  plan: 'ARCADE' | 'ADVANCED' | 'PRO' | null
  addonList: (keyof typeof addonData)[]
  isYearly: boolean
  setPlan: (plan: 'ARCADE' | 'ADVANCED' | 'PRO') => void
  setIsYearly: (isYearly: boolean) => void
  setAddonList: (addons: (keyof typeof addonData)[]) => void
  toggleBillingCycle: () => void
}

export const usePlanDataStore = create<PlanDataState>((set) => ({
  plan: null,
  addonList: [],
  isYearly: false,
  setPlan: (plan) => set({ plan }),
  setIsYearly: (isYearly) => set({ isYearly }),
  setAddonList: (addonList) => set({ addonList }),
  toggleBillingCycle: () => set((state) => ({ isYearly: !state.isYearly }))
}))
