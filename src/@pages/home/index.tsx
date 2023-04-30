import styled from "@emotion/styled";
import { Button, css } from "@mui/material";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "shared/lib";
import { Topic } from "shared/ui";

const HomePage: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Sieugene | {t("meta.personal")}</title>
        <meta
          name="description"
          content={t("meta.description")}
        />
        <meta
          name="keywords"
          content="sieugene, eugene poluakov, Евгений Поляков, frontend developer, react developer, russia, フロントエンド開発者、リアクト開発者, 日本"
        />
      </Head>
      <Wrapper>
        <About>
          <p>{t("home.about")}</p>
          <Link href={ROUTES.about} prefetch={false}>
            <a
              href={ROUTES.about}
              css={css`
                text-decoration: underline;
              `}
            >
              <Button>{t("home.me")}</Button>
            </a>
          </Link>
        </About>
        <Topic />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10rem;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    flex-direction: column;
  }
`;

const About = styled.div`
  max-width: 380px;
  font-size: 24px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    max-width: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export default HomePage;
