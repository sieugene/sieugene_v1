import styled from "@emotion/styled";
import { getPosts } from "entities/posts/api";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";
import { NoteCard } from "entities/posts/ui";

const PostsList = () => {
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
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 30px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    justify-content: center;
  }
`;

export default PostsList;
