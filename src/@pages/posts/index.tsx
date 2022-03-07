import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { PostsList } from "entities/posts/ui";
import Head from "next/head";
import { ReactElement } from "react";
import { SWRConfig } from "swr";
import { PostsPageFallbackProps } from "../../../pages/notes";

const PostsPage = ({ fallback }: PostsPageFallbackProps) => {
  return (
    <>
      <Head>
        <title>Sieugene | Notes</title>
      </Head>

      <SWRConfig value={{ fallback }}>
        <PostsList />
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
