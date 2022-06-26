import styled from "@emotion/styled";
import { getPosts } from "entities/posts/api";
import { NoteCard } from "entities/posts/ui";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";

const PostsList = () => {
  const { t } = useTranslation();
  const { lang } = useTranslation("common");
  const { data: posts, error } = useSWR([lang], getPosts);

  if (error) {
    return <div>Ooops...</div>;
  }

  return (
    <PostsList.Wrapper>
      {posts?.map((post) => (
        <NoteCard {...post} key={post.id} />
      ))}
    </PostsList.Wrapper>
  );
};

PostsList.Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
`;

export default PostsList;
