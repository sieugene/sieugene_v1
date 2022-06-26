import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PostT } from "@server/handlers/posts/types/posts.type";
import Category from "entities/post/ui/Category";
import Link from "next/link";
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

  return (
    <Card.Root href={link}>
      <Link href={link}>
        <NoteCard.Content>
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
      </Link>
    </Card.Root>
  );
};

NoteCard.Content = styled(Card.Content)`
  bottom: 10px;
  width: 95%;
`;

export default NoteCard;
