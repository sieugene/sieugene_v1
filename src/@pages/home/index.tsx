import styled from "@emotion/styled";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "shared/lib";
import { Topic } from "shared/ui";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sieugene | Персональный блог</title>
        <meta
          name="description"
          content="My name is Eugene, my main area of frontend development, Next(React), Apollo. I am engaged in web development since 2019."
        />
        <meta
          name="keywords"
          content="sieugene, eugene poluakov, Евгений Поляков, frontend developer, react develop, russia"
        />
      </Head>
      <Wrapper>
        <About>
          <p> Меня зовут Евгений, я frontend developer.</p>
          <Link href={ROUTES.about}>
            <a href={ROUTES.about}>
              <Button>Обо мне</Button>
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
