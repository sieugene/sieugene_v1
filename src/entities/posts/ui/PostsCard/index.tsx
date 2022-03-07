import styled from "@emotion/styled";
import { PostT } from "@server/handlers/posts/types/posts.type";
import Category from "entities/post/ui/Category";
import Date from "entities/post/ui/Date";
import Image from "next/image";
import { generateIdenticon } from "shared/lib/utils/generateIdenticon";

const PostsCard = ({ description, link, id, title, category }: PostT) => {
  return (
    <PostsCard.Wrapper>
      <img
        src={generateIdenticon(id, {
          background: [255, 255, 255, 255],
        })}
        alt=""
      />
      <PostsCard.Body>
        <Category category={category} />

        <PostsCard.Title>{title}</PostsCard.Title>

        <PostsCard.Text>{description}</PostsCard.Text>
        <a href={link}>link</a>
      </PostsCard.Body>
    </PostsCard.Wrapper>
  );
};

PostsCard.Wrapper = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: box-shadow 0.3s;
  width: 320px;
  &:hover {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(134, 151, 38, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
  img {
    width: 100%;
    object-fit: contain;
	max-height: 200px;
  }
`;
PostsCard.Body = styled.div`
  padding: 10px;
`;

PostsCard.Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.primary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  margin-top: 10px;
`;

PostsCard.Text = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
`;

export default PostsCard;
