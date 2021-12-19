import styled from "@emotion/styled";
import { FC } from "react";

const Label: FC = ({ children }) => {
  return <H2>{children}</H2>;
};

const H2 = styled.h2`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: ${(props) => props.theme.spaces.big};
  border-bottom: 1px solid ${(props) => props.theme.borders.grayBorder};
  padding-bottom: ${(props) => props.theme.spaces.medium}; ;
`;

export default Label;
