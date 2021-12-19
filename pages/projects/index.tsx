import { css } from "@emotion/react";
import { Empty } from "shared/ui";

const Projects = () => {
  return (
    <Empty>
      <h2>
        Пока что можно посмотреть на{" "}
        <a
          href="https://github.com/sieugene"
          target="_blank"
          rel="noreferrer"
          css={css`
            color: blue;
          `}
        >
          гите
        </a>
      </h2>
    </Empty>
  );
};

export default Projects;
