import { Button, Container } from "@mui/material";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Header, Topic } from "shared/ui";
import { css } from "@emotion/react";
import { Grid } from "@mui/material";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container>
      <Header />
      <Grid
        container
        spacing={2}
        xs={12}
        justifyContent={"space-between"}
        css={css`
          margin-top: 10rem;
        `}
      >
        <div
          css={css`
            max-width: 380px;
            font-size: 24px;
          `}
        >
          <p> Меня зовут Евгений, я frontend developer.</p>
          <Button>Обо мне</Button>
        </div>
        <Topic />
      </Grid>
    </Container>
  );
};

export default Home;
