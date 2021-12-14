import styled from "@emotion/styled";
import { Post } from "entities/post";
import { getPostByName } from "entities/post/api";
import { API_ENDPOINTS } from "shared/lib/api";
import useSWR, { SWRConfig } from "swr";
import { PostPageFallbackProps } from "../../../pages/post/[name]";

const PostByName = () => {
  const { data: source, error } = useSWR(
    API_ENDPOINTS.PostByTitle,
    getPostByName
  );
  if (!source) {
    return <div>Ooops...</div>;
  }
  return (
    <Wrapper>
      <Post source={source} />
    </Wrapper>
  );
};

const PostPage = ({ fallback }: PostPageFallbackProps) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PostByName />
    </SWRConfig>
  );
};

const Wrapper = styled.div`
  -webkit-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  border-radius: 0.6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 100vh;
  padding: 1rem;
`;

export default PostPage;
