import { Container } from "@mui/material";
import React, { FC } from "react";
import { Footer, Header } from "..";

const Layouts: FC<{ withLayout: boolean }> = ({ children, withLayout }) => {
  if (withLayout) {
    return (
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Header />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layouts;
