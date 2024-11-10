import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useQuery } from "@tanstack/react-query";

type GetMeResponse =
  paths["/api/parsing/profile/"]["get"]["responses"]["200"]["content"]["application/json"];

const getMe = async () => {
  const response = await api<GetMeResponse>("/parsing/profile/");

  return response.data;
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
  });
};
