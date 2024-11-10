import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useInfiniteQuery } from "@tanstack/react-query";

type GetTagsResponse =
  paths["/api/parsing/tags/"]["get"]["responses"]["200"]["content"]["application/json"];

type GetTagsParams = {
  page: number;
};

const getTags = async (params: GetTagsParams) => {
  const res = await api.get<GetTagsResponse>("/parsing/tags/", {
    params,
  });
  return res.data.results;
};

export const useGetTags = () => {
  return useInfiniteQuery({
    queryKey: ["getTags"],
    queryFn: ({ pageParam }) =>
      getTags({
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam(lastPage, _allPages, lastPageParam) {
      return lastPage.length < 1 ? null : lastPageParam + 1;
    },
    getPreviousPageParam(_firstPage, _allPages, firstpageParam) {
      if (firstpageParam - 1 < 0) {
        return null;
      }
      return firstpageParam - 1;
    },
  });
};
