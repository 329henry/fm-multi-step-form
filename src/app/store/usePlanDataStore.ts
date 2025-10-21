import { create } from 'zustand'
import { AddonType } from '@constants/addonData'
import { PlanType } from '@constants/planDetails'

interface PlanDataState {
  plan: PlanType | null
  addonList: AddonType[]
  isYearly: boolean
  setPlan: (plan: PlanType) => void
  setIsYearly: (isYearly: boolean) => void
  setAddonList: (addons: AddonType[]) => void
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
