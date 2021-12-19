import { css } from "@emotion/react";
import { FC } from "react";

const Empty: FC = ({ children }) => {
  return (
    <div
      css={css`
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("https://i.gifer.com/3rCC.gif");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      <div
        css={css`
          background: #ffffff80;
        `}
      >
        <h1
          css={css`
            font-size: 32px;
            margin-top: 30px;
          `}
        >
          В скором времени тут что-то будет...
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Empty;
