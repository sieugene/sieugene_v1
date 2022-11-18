import styled from "@emotion/styled";
import { Category, Date } from "entities/post";
import { FC } from "react";
import { CategoryProps } from "../Category";
import { DateProps } from "../Date";

export type PostDetailsProps = CategoryProps & DateProps;
const Details: FC<PostDetailsProps> = ({ category, date }) => {
  return (
    <DetailsList>
      <Date date={date} />
      {/* <li>
        <Category category={category} />
      </li> */}
      {/* <li>
        <Date date={date} />
      </li> */}
    </DetailsList>
  );
};

const DetailsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 25px 0 0;
  padding: 7px;
  width: fit-content;
  li {
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => theme.spaces.default};
    &:not(:last-of-type):after {
      content: "·";
      display: inline-block;
      margin-left: ${({ theme }) => theme.spaces.default};
      font-weight: ${({ theme }) => theme.typography.fontWeightBold};
      opacity: 0.4;
    }
  }
`;

export default Details;
