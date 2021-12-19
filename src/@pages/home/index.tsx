import { Button } from "@mui/material";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Topic } from "shared/ui";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "shared/lib";

const HomePage: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
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
