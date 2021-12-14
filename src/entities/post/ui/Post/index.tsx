import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import Title from "../Title";
export type PostProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Components = { Title };

const Post: FC<PostProps> = ({ source }) => {
  return <MDXRemote {...source} components={Components} />;
};

export default Post;
