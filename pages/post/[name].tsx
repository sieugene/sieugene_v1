import { PostPage } from "@pages";
import { PostHandlerResponse } from '@server/handlers/post';
import { getPostByName } from "entities/post/api";
import { GetStaticProps } from "next";

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
            [name]: source,
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
