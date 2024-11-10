import { create } from "zustand";

type State = {
  mealPlanTitle: string;
  mealsPerDay: number | string | null;
  mealPlanLength: number | string | null;
};

type Actions = {
  setMealsPerDay: (mealsPerDay: number | string | null) => void;
  setMealPlanLength: (mealPlanLength: number | string | null) => void;
  setMealPlanTitle: (mealPlanTitle: string) => void;
};

const initialState: State = {
  mealPlanTitle: "",
  mealsPerDay: null,
  mealPlanLength: null,
};

export const useCreateMealPlanStore = create<State & Actions>()((set) => ({
  ...initialState,
  setMealsPerDay: (mealsPerDay) => set({ mealsPerDay }),
  setMealPlanLength: (mealPlanLength) => set({ mealPlanLength }),
  setMealPlanTitle: (mealPlanTitle) => set({ mealPlanTitle }),
}));
