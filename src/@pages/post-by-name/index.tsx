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
  return <Post source={source} />;
};

const PostPage = ({ fallback }: PostPageFallbackProps) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PostByName />
    </SWRConfig>
  );
};

export default PostPage;
