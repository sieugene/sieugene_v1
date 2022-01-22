import { PostPage } from "@pages";
import { PostHandlerResponse } from "@server/handlers/post";
import { getPostByName } from "entities/post/api";
import { GetStaticProps } from "next";
import { unstable_serialize } from "swr";

export type PostPageFallbackProps = {
  fallback: {
    [key: string]: PostHandlerResponse["data"];
  };
};

export const getServerSideProps: GetStaticProps<
  PostPageFallbackProps
> = async ({ params, locale }) => {
  const name = params?.name?.toString() || "";
  try {
    const source = await getPostByName(name, locale);

    return {
      props: {
        fallback: {
          [unstable_serialize([name, locale])]: source,
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
