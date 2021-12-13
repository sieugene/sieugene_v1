import { Container } from "@mui/material";
import { FC } from "react";
import { Header } from "..";

const Layouts: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layouts;
