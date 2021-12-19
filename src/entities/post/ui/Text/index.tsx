import styled from "@emotion/styled";
import { FC } from "react";

const Text: FC = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};
const Paragraph = styled.p`
  margin-top: ${({ theme }) => theme.spaces.medium};
  font-size: ${({ theme }) => theme.fontSize.text};
  line-height: ${({ theme }) => theme.lineHeight.wide};
  color: ${({ theme }) => theme.colors.black};
  b {
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  }
  a {
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export default Text;
