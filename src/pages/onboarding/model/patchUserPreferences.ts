import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useMutation } from "@tanstack/react-query";

export interface PatchPreferencesInput {
  current_weight: number;
  goal_weight: number;
  diet_goal: string;
  diet_type: string;
  user: number;
  allegries: number[];
  preferences: number[];
}

type PatchPreferencesResponse =
  paths["/api/parsing/user-preference/"]["patch"]["responses"]["200"]["content"]["application/json"];

const patchUserPreferences = async (input: Partial<PatchPreferencesInput>) => {
  const res = await api.patch<PatchPreferencesResponse>(
    "/parsing/user-preference/",
    input
  );

  return res.data;
};

export const usePatchUserPreferences = () => {
  return useMutation({
    mutationFn: patchUserPreferences,
  });
};
