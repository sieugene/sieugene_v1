import styled from "@emotion/styled";
import { Container, css } from "@mui/material";
import { PostsList } from "entities/posts/ui";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { ReactElement } from "react";
import { BaseTypography } from "shared/ui";
import { SWRConfig } from "swr";
import { PostsPageFallbackProps } from "../../../pages/notes";

const PostsPage = ({ fallback }: PostsPageFallbackProps) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Sieugene | Notes</title>
      </Head>

      <SWRConfig value={{ fallback }}>
        <PostsPage.Root>
          <BaseTypography
            variant="h3"
            css={css`
              font-weight: 700;
              color: cornflowerblue;
            `}
          >
            {t("notes.title")}
          </BaseTypography>
          <BaseTypography
            variant="caption"
            css={css`
              display: block;
              white-space: pre-line;
            `}
          >
            {t("notes.info")}
          </BaseTypography>
          <PostsList />
        </PostsPage.Root>
      </SWRConfig>
    </>
  );
};

PostsPage.Root = styled.div`
  margin: 25px 0;
`;

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Layout = styled(Container)`
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0;
  }
`;

export default PostsPage;
