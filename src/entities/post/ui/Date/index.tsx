import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { FC } from "react";

export type DateProps = {
  date: string;
};
const Date: FC<DateProps> = ({ date }) => {
  const { t } = useTranslation("common");
  return (
    <Paragraph>
      {t("date")}: {date}
    </Paragraph>
  );
};

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.grayish};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;

export default Date;
