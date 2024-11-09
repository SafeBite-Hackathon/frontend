import { create } from 'zustand'

type State = {
  step: number
  goal: null | string
  diet: null | string
  allergies: string[]
}

type Actions = {
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
  setGoal: (goal: string) => void
  setDiet: (diet: string) => void
  setNewAllergies: (allergies: string) => void
}

const initialState: State = {
  step: 1,
  goal: null,
  diet: null,
  allergies: []
}

export const useOnboardingStore = create<State & Actions>()((set) => ({
  ...initialState,
  nextStep: () => set((state) => ({ step: state.step + 1 })), 
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setStep: (step) => set({ step }),
  setGoal: (goal) => set({ goal }),
  setDiet: (diet) => set({ diet }),
  setNewAllergies: (allergie) => {
    set((state) => {
      const allergies = state.allergies.includes(allergie)
        ? state.allergies.filter((a) => a !== allergie)
        : [...state.allergies, allergie]

      return { allergies }
    })
  }
}))