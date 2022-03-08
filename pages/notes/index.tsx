import { PostsPage } from "@pages";
import { PostsHandlerResponse } from "@server/handlers/posts";
import { getPosts } from "entities/posts/api";
import { GetStaticProps } from "next";
import { unstable_serialize } from "swr";

export type PostsPageFallbackProps = {
  fallback: {
    [key: string]: PostsHandlerResponse["data"];
  };
};

export const getServerSideProps: GetStaticProps<
  PostsPageFallbackProps
> = async ({ locale }) => {
  try {
    const source = await getPosts(locale);

    return {
      props: {
        fallback: {
          [unstable_serialize([locale])]: source,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostsPage;
