import { PostHandlerResponse } from "@server/handlers/post";
import { API_ENDPOINTS } from "shared/lib/api";
import { getFetcher } from "shared/lib/fetcher";

export const getPostByName = async (name: string, locale = "ru") => {
  const response = await getFetcher<PostHandlerResponse>(
    `${API_ENDPOINTS.PostByTitle}${locale}/${name}`
  );
  return response.data;
};
