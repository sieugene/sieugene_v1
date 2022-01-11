import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { projectsArray } from "shared/data/projects";
import { Card } from "shared/ui";
import { ProjectsCategories } from "widgets/projects-categories";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

const Projects = () => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(CategoriesConstants.Frontend);

  const projects = projectsArray.filter((card) => card.category === active);

  return (
    <>
      {/* <Search /> */}
      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <ProjectsCategories active={active} setActive={setActive} />
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
  margin-top: 50px;
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
