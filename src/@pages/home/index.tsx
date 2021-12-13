import { Button } from "@mui/material";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Topic } from "shared/ui";
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "shared/lib";

const HomePage: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
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
        <Link href={ROUTES.about}>
          <a href={ROUTES.about}>
            <Button>Обо мне</Button>
          </a>
        </Link>
      </div>
      <Topic />
    </Grid>
  );
};

export default HomePage;
