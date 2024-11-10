import { create } from "zustand";

type State = {
  step: number;
  goal: null | string;
  diet: null | string;
  allergies: string[];
  currentWeight: string;
  goalWeight: string;
  preferences: string[];
};

type Actions = {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setGoal: (goal: string) => void;
  setDiet: (diet: string) => void;
  setNewAllergies: (allergies: string) => void;
  setCurrentWeight: (currentWeight: string) => void;
  setGoalWeight: (goalWeight: string) => void;
  setPreferences: (preferences: string[]) => void;
  setNewPreferences: (preferences: string) => void;
};

const initialState: State = {
  step: 1,
  goal: null,
  diet: null,
  allergies: [],
  currentWeight: "",
  goalWeight: "",
  preferences: [],
};

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
        : [...state.allergies, allergie];

      return { allergies };
    });
  },
  setCurrentWeight: (currentWeight) => set({ currentWeight }),
  setGoalWeight: (goalWeight) => set({ goalWeight }),
  setPreferences: (preferences) => set({ preferences }),
  setNewPreferences: (preference) => {
    set((state) => {
      const preferences = state.preferences.includes(preference)
        ? state.preferences.filter((p) => p !== preference)
        : [...state.preferences, preference];
      return { preferences };
    });
  },
}));
