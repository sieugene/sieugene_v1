import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Category from "../Category";
import Date from "../Date";
import Details from "../Details";
import Label from "../Label";
import List from "../List";
import Text from "../Text";
import Title from "../Title";

export type PostProps = {
  source?: MDXRemoteSerializeResult<Record<string, unknown>>;
  loading: boolean;
};

const Components = {
  Title,
  Category,
  Details,
  Date,
  Text,
  Label,
  List,
};

const Post = ({ source, loading }: PostProps) => {
  return (
    <Wrapper>
      {loading ? (
        <Post.Template />
      ) : (
        source && <MDXRemote {...source} components={Components} />
      )}
    </Wrapper>
  );
};

Post.Template = () => {
  return (
    <>
      <Skeleton width={190} height={49} />
      <Skeleton width={220} height={34} />
      <Skeleton width="100%" height="100vh" />
    </>
  );
};

const Wrapper = styled.div`
  -webkit-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-top: 3rem;
  min-height: 100vh;
  padding: 4rem;
  word-wrap: break-word;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: 1rem;
  }
  position: relative;
`;

export default Post;
