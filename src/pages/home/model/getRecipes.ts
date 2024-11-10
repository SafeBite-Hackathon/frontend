import api from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { paths } from "@/types/paths";

type GetRecipesResponse =
  paths["/api/parsing/recipes/"]["get"]["responses"]["200"]["content"]["application/json"];

interface GetRecipesParams {
  page: number;
}

const getRecipes = async (params: GetRecipesParams) => {
  const response = await api.get<GetRecipesResponse>("/parsing/recipes/", {
    params,
  });
  return response.data;
};

export const useGetRecipes = (params: GetRecipesParams) => {
  const query = useQuery({
    queryKey: ["getRecipes"],
    queryFn: () => getRecipes(params),
  });

  return query;
};
