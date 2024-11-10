import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useQuery } from "@tanstack/react-query";

type GetUserPreferencesResponse =
  paths["/api/parsing/user-preference/"]["get"]["responses"]["200"]["content"]["application/json"];

const getUserPreferences = async () => {
  const res = await api.get<GetUserPreferencesResponse>(
    "/parsing/user-preference/"
  );

  return res.data;
};

export const useGetUserPreferences = () => {
  return useQuery({
    queryKey: ["getUserPreferences"],
    queryFn: getUserPreferences,
  });
};
