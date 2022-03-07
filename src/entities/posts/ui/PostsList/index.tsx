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
    <div>
      {posts?.map((post) => (
        <PostsCard {...post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
