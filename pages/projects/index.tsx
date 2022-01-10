import { css } from "@emotion/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Empty } from "shared/ui";

const Projects = () => {
  const { t } = useTranslation("common");

  return (
    <Empty>
      <h2>
        {t("empty.check_on")}{" "}
        <a
          href="https://github.com/sieugene"
          target="_blank"
          rel="noreferrer"
          css={css`
            color: blue;
          `}
        >
          {t("empty.git")}
        </a>
      </h2>
    </Empty>
  );
};

export default Projects;
