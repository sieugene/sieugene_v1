import { PostsHandlerResponse } from "@server/handlers/posts";
import { API_ENDPOINTS } from "shared/lib/api";
import { getFetcher } from "shared/lib/fetcher";

export const getPosts = async (locale = "en") => {
  const response = await getFetcher<PostsHandlerResponse>(
    `${API_ENDPOINTS.Posts}${locale}`
  );
  return response.data;
};
