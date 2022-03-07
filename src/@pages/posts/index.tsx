import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { getPosts } from 'entities/posts/api';
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { ReactElement } from "react";
import useSWR, { SWRConfig } from "swr";
import { PostsPageFallbackProps } from "../../../pages/notes";

const Posts = () => {
  const { lang } = useTranslation("common");
  const { data: source, error } = useSWR([lang], getPosts);

  if (error) {
    return <div>Ooops...</div>;
  }

  return (
    <div>
      {source?.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.link}</h2>
            <h2> {post.description}</h2>
          </div>
        );
      })}
    </div>
  );
};

const PostsPage = ({ fallback }: PostsPageFallbackProps) => {
  return (
    <>
      <Head>
        <title>Sieugene | Notes</title>
      </Head>

      <SWRConfig value={{ fallback }}>
        <Posts />
      </SWRConfig>
    </>
  );
};

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Layout = styled(Container)`
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0;
  }
`;

export default PostsPage;
