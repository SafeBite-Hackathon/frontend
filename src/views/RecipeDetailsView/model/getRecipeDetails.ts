import api from "@/config/axios"
import { paths } from "@/types/paths"
import { useQuery } from "@tanstack/react-query"

type GetRecipeDetailsResponse = paths['/api/parsing/recipes/{id}/']['get']['responses']['200']['content']['application/json']

const getRecipeDetails = async (id: string | number) => {
  const response = await api.get<GetRecipeDetailsResponse>(`/parsing/recipes/${id}`)

  return response.data
}

export const useGetRecipeDetails = (id?: string | number) => {
  const query = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeDetails(id!),
    enabled: !!id,
  })

  return query
}