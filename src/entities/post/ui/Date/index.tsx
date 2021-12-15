import styled from "@emotion/styled";
import { FC } from "react";

export type DateProps = {
  date: string;
};
const Date: FC<DateProps> = ({ date }) => {
  return <Paragraph>Дата: {date}</Paragraph>;
};

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.grayish};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;

export default Date;
