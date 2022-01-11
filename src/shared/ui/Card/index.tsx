import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { generateIdenticon } from "shared/lib/utils/generateIdenticon";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

export type CardProps = {
  title: string;
  text: string;
  category: CategoriesConstants;
  link: string;
  id: string;
};
const Card: FC<CardProps> = ({
  title = "-",
  text = "-",
  category = "-",
  link = "",
  id = "1",
}) => {
  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <Image width={300} height={400} src={generateIdenticon(id)} alt="" />
        <Content>
          <CardHeader>
            <Title>{title}</Title> <Category>{category}</Category>
          </CardHeader>

          <Text>{text}</Text>
        </Content>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const Content = styled.div`
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

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.extaSmall};
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: 500;
`;

const Category = styled(Title)`
  font-weight: 300;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${Category} {
    margin-left: 10px;
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.card};
  font-weight: 500;
  line-height: 23px;
`;

export default Card;
