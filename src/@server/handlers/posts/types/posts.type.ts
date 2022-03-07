import { PostCategoryT } from "entities/post/model/types";

export type Posts = {
  data: PostT[];
};
export type PostT = {
  title: string;
  description: string;
  link: string;
  timestamp: string;
  category: PostCategoryT;
  id: string;
};
