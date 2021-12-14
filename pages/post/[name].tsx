import { PostPage } from "@pages";
import { PostHandlerResponse } from '@server/handlers/post';
import { getPostByName } from "entities/post/api";
import { GetStaticProps } from "next";
import { API_ENDPOINTS } from "shared/lib/api";

export type PostPageFallbackProps = {
  fallback: {
    [key: string]: PostHandlerResponse['data']
  };
};

export const getServerSideProps: GetStaticProps<PostPageFallbackProps> =
  async ({ params }) => {
    const name = params?.name?.toString() || "";
    try {
      const source = await getPostByName(name);

      return {
        props: {
          fallback: {
            [API_ENDPOINTS.PostByTitle]: source,
          },
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  };

export default PostPage;
