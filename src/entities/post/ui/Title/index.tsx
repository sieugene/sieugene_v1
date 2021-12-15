import styled from "@emotion/styled";
import { FC } from "react";

const Title: FC = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

const Paragraph = styled.h1`
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: ${(props) => props.theme.fontSize.big};
`;

export default Title;
