import { postHandler } from "@server/handlers";
import { PostHandlerResponse } from "@server/handlers/post";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostHandlerResponse>
) {
  return postHandler(req, res);
}
