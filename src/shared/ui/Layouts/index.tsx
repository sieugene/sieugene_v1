import { Container } from "@mui/material";
import React, { FC } from "react";
import { Header } from "..";

const Layouts: FC<{ withLayout: boolean }> = ({ children, withLayout }) => {
  if (withLayout) {
    <Container>
      <Header />
      {children}
    </Container>;
  }
  return (
    <React.Fragment>
      <Container>
        <Header />
      </Container>
      {children}
    </React.Fragment>
  );
};

export default Layouts;
