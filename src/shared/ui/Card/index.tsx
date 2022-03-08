import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { generateIdenticon } from "shared/lib/utils/generateIdenticon";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

export type CardProps = {
  title: string;
  text: string;
  category: CategoriesConstants | string;
  link: string;
  id: string;
};
const Card = ({
  title = "-",
  text = "-",
  category = "-",
  link = "",
  id = "1",
}: CardProps) => {
  return (
    <Card.Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <Image width={300} height={400} src={generateIdenticon(id)} alt="" />
        <Card.Content>
          <Card.CardHeader>
            <Card.Title>{title}</Card.Title>{" "}
            <Card.Category>{category}</Card.Category>
          </Card.CardHeader>

          <Card.Text>{text}</Card.Text>
        </Card.Content>
      </a>
    </Card.Wrapper>
  );
};

Card.Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  transition: transform 0.6s;
  &:hover {
    transform: scale(1.04);
    opacity: 0.9;
  }
`;

Card.Content = styled.div`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 20px;
  padding: 15px;
  background: #fffffff0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: 90%;
`;

Card.Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.extaSmall};
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: 500;
`;

Card.Category = styled(Card.Title)`
  font-weight: 300;
`;

Card.CardHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${Card.Category} {
    margin-left: 10px;
  }
`;

Card.Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.card};
  font-weight: 500;
  line-height: 23px;
`;

export default Card;
