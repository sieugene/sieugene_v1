import { Container } from "@mui/material";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { Header } from "shared/ui";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
