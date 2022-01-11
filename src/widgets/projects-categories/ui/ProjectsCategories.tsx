import styled from "@emotion/styled";
import { FC } from "react";
import { BaseButton } from "shared/ui";
import { CategoriesConstants } from "../model/types";

type Props = {
  active: CategoriesConstants;
  setActive: (active: CategoriesConstants) => void;
};
const ProjectsCategories: FC<Props> = ({ active, setActive }) => {
  const categories = [
    {
      name: CategoriesConstants.Frontend,
    },
    {
      name: CategoriesConstants.Backend,
    },
    {
      name: CategoriesConstants.Blockchain,
    },
  ];

  const changeCat = (name: CategoriesConstants) => {
    setActive(name);
  };

  return (
    <Categories>
      {categories?.map((cat, index) => (
        <Category
          key={index}
          active={cat.name === active}
          onClick={() => changeCat(cat.name)}
        >
          {cat.name}
        </Category>
      ))}
    </Categories>
  );
};

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Category = styled(BaseButton)<{ active?: boolean }>`
  background: ${({ theme, active }) => active && theme.colors.moderateBlue};
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.black};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.extaSmall};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: 6px;
  &:hover {
    background: ${({ theme, active }) => active && theme.colors.moderateBlue};
  }
`;

export default ProjectsCategories;
