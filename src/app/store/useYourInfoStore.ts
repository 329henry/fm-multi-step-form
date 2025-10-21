import { create } from 'zustand'

interface YourInfoState {
  name: string
  email: string
  phone: string
  setInfoData: (data: { name: string; email: string; phone: string }) => void
}

export const useYourInfoStore = create<YourInfoState>((set) => ({
  name: '',
  email: '',
  phone: '',
  setInfoData: (data) => set({ name: data.name, email: data.email, phone: data.phone })
}))
