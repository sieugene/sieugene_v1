import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PostT } from "@server/handlers/posts/types/posts.type";
import Category from "entities/post/ui/Category";
import { IdenticonOptions } from "identicon.js";
import Image from "next/image";
import { generateIdenticon } from "shared/lib/utils/generateIdenticon";

enum CardVariants {
  YELLOW,
  WHITE,
}
const PostCard = ({
  title = "-",
  category,
  description,
  link = "",
  id = "1",
}: PostT) => {
  const theme = useTheme();
  const variant = Number(id) % 2 ? CardVariants.YELLOW : CardVariants.WHITE;

  const background: IdenticonOptions["background"] =
    variant === CardVariants.YELLOW
      ? [245, 231, 101, 255]
      : [255, 255, 255, 255];

  return (
    <PostCard.Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          width={300}
          height={400}
          src={generateIdenticon(id, {
            foreground: [42, 42, 42, 42],
            background,
          })}
          alt=""
        />
        <PostCard.Content variant={variant}>
          <Category
            category={category}
            styleCss={css`
              font-size: ${theme.fontSize.extaSmall};
              color: ${theme.colors.moderateBlue};
              font-weight: 300;
              text-transform: capitalize;
              margin-bottom: 5px;
            `}
          />
          <PostCard.PostCardHeader>
            <PostCard.Title>{title}</PostCard.Title>{" "}
          </PostCard.PostCardHeader>

          <PostCard.Text>{description}</PostCard.Text>
        </PostCard.Content>
      </a>
    </PostCard.Wrapper>
  );
};

PostCard.Wrapper = styled.div`
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

PostCard.Content = styled.div<{ variant: CardVariants }>`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  padding: 15px;
  ${({ variant }) => {
    if (variant === CardVariants.WHITE) {
      return "background: rgb(247 244 244 / 78%)";
    }
    return "background: #fcfadf";
  }};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: 95%;
`;

PostCard.Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.extaSmall};
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: 500;
`;

PostCard.PostCardHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

PostCard.Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.card};
  font-weight: 300;
  line-height: 23px;
`;

export default PostCard;
