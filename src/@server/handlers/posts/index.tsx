import { NextApiRequest, NextApiResponse } from "next";
import posts from "shared/data/posts.json";
import { Posts, PostT } from "./types/posts.type";

export interface PostsHandlerResponse {
  data: PostT[];
}

const postsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<PostsHandlerResponse>
) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ data: (posts as Posts).data });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default postsHandler;
