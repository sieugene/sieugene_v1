import { css } from "@emotion/react";
import { FC } from "react";

const List: FC = ({ children }) => {
  return (
    <ul
      css={css`
        margin-left: 33px;
      `}
    >
      {children}
    </ul>
  );
};
export default List;
