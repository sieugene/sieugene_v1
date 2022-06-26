import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { projectsArray } from "shared/data/projects";
import { BaseTypography, Card } from "shared/ui";
import { ProjectsCategories } from "widgets/projects-categories";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

const Projects = () => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(CategoriesConstants.Frontend);

  const projects = projectsArray;

  return (
    <>
      <div
        css={css`
          margin-top: 25px;
        `}
      >
        <BaseTypography
          variant="h3"
          css={css`
            font-weight: 700;
            color: cornflowerblue;
          `}
        >
          {t("links.projects")}
        </BaseTypography>
        <BaseTypography
          variant="caption"
          css={css`
            display: block;
            white-space: pre-line;
          `}
        >
          {t("projects.info")}
        </BaseTypography>
        <BaseTypography
          variant="caption"
          css={css`
            display: block;
            white-space: pre-line;
            font-weight: bold;
          `}
        >
          {t("projects.warning")}
        </BaseTypography>
        {/* <ProjectsCategories active={active} setActive={setActive} /> */}
      </div>

      <Cards>
        {projects?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Cards>

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
    </>
  );
};

const Cards = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 30px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    justify-content: center;
  }
`;

export default Projects;
