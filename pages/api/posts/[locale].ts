import { postsHandler } from "@server/handlers";
import { PostsHandlerResponse } from "@server/handlers/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsHandlerResponse>
) {
  return postsHandler(req, res);
}
