import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { FC } from "react";

export type DateProps = {
  date: number;
};
const DateTab: FC<DateProps> = ({ date }) => {
  const { t } = useTranslation("common");

  return (
    <Paragraph>
      {new Intl.DateTimeFormat('default', {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    }).format(date)}
    </Paragraph>
  );
};



const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.grayish};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;

export default DateTab;
