import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

import { PostCategoryT } from "entities/post/model/types";
import { FC } from "react";

export type CategoryProps = {
  category: PostCategoryT;
  styleCss?: SerializedStyles;
};
const Category: FC<CategoryProps> = ({ category, styleCss }) => {
  return <Paragraph css={styleCss}>{category}</Paragraph>;
};

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.grayish};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    background: ${(props) => props.theme.colors.limeGreen};
    margin-right: ${({ theme }) => theme.spaces.default};
    display: inline-block;
  }
`;

export default Category;
