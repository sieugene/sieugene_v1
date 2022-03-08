import styled from "@emotion/styled";
import { getPosts } from "entities/posts/api";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";
import PostsCard from "../PostsCard";

const PostsList = () => {
  const { lang } = useTranslation("common");
  const { data: posts, error } = useSWR([lang], getPosts);

  if (error) {
    return <div>Ooops...</div>;
  }

  return (
    <PostsList.Wrapper>
      {posts?.map((post) => (
        <PostsCard {...post} key={post.id} />
      ))}
    </PostsList.Wrapper>
  );
};

PostsList.Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export default PostsList;
