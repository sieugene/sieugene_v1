const BaseEndpoint = process.env.API;

export const API_ENDPOINTS = {
  PostByTitle: BaseEndpoint + `/api/post/`,
  Posts: BaseEndpoint + `/api/posts/`,
};
