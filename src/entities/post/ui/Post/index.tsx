import styled from "@emotion/styled";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import Details from "../Details";
import Category from "../Category";
import Title from "../Title";
import Date from "../Date";

export type PostProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Components = { Title, Category, Details, Date };

const Post: FC<PostProps> = ({ source }) => {
  return (
    <Wrapper>
      <MDXRemote {...source} components={Components} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 100vh;
  padding: 4rem;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: 1rem;
  }
`;

export default Post;
