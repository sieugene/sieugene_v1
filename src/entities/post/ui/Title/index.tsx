import styled from "@emotion/styled";
import { FC } from "react";

const Title: FC = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

const Paragraph = styled.h1`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: ${(props) => props.theme.fontSize.big};
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    font-size: ${(props) => props.theme.fontSize.primary};
  }
`;

export default Title;
