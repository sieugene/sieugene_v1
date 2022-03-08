import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PostT } from "@server/handlers/posts/types/posts.type";
import Category from "entities/post/ui/Category";
import { IdenticonOptions } from "identicon.js";
import Image from "next/image";
import { generateIdenticon } from "shared/lib/utils/generateIdenticon";
import { Card } from "shared/ui";

enum CardVariants {
  YELLOW,
  WHITE,
}
const NoteCard = ({
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
    <Card.Wrapper>
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
        <NoteCard.Content variant={variant}>
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
          <Card.CardHeader>
            <Card.Title>{title}</Card.Title>{" "}
          </Card.CardHeader>

          <Card.Text>{description}</Card.Text>
        </NoteCard.Content>
      </a>
    </Card.Wrapper>
  );
};

NoteCard.Content = styled(Card.Content)<{ variant: CardVariants }>`
  bottom: 10px;
  ${({ variant }) => {
    if (variant === CardVariants.WHITE) {
      return "background: rgb(247 244 244 / 78%)";
    }
    return "background: #fcfadf";
  }};
  width: 95%;
`;

export default NoteCard;
