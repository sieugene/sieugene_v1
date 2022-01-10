import { css } from "@emotion/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { FC } from "react";
import { ROUTES } from "shared/lib";
import { BaseButton } from "..";

const Empty: FC = ({ children }) => {
  const { t } = useTranslation("common");
  return (
    <>
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
            {t("empty.no_content")}
          </h1>

          {children}
        </div>
      </div>
      <Link href={ROUTES.about}>
        <a href={ROUTES.about}>
          <BaseButton
            css={css`
              margin-top: 30px;
              background: blue;
              color: white;
              width: fit-content;
              &:hover {
                background: blue;
              }
            `}
          >
            {t("home.me")}
          </BaseButton>
        </a>
      </Link>
    </>
  );
};

export default Empty;
