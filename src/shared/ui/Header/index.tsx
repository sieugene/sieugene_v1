import { css, jsx } from "@emotion/react";

import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Logo } from "shared/icons";
import { ROUTES } from "shared/lib";

const Header = () => {
  const { t } = useTranslation("common");
  const links = [
    {
      title: t("links.home"),
      href: ROUTES.home,
    },
    {
      title: t("links.notes"),
      href: ROUTES.notes,
    },
    {
      title: t("links.projects"),
      href: ROUTES.projects,
    },
  ];
  return (
    <header>
      <Grid
        container
        spacing={2}
        xs={12}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Link href={ROUTES.home}>
            <a href={ROUTES.home}>
              <Header.LogoSection>
                <Header.StyledLogo />
                <h1>Eugene.Poluakov</h1>
              </Header.LogoSection>
            </a>
          </Link>
        </Grid>

        <Header.Links>
          {links?.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <a
                  href={link.href}
                  css={css`
                    margin-right: 1rem;
                    cursor: pointer;
                    transition: 0.3s all ease;
                    text-transform: capitalize;
                    &:hover {
                      opacity: 0.7;
                    }
                  `}
                >
                  {link.title}
                </a>
              </Link>
            );
          })}
        </Header.Links>
      </Grid>
    </header>
  );
};

Header.LogoSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 18px;
  }
`;

Header.StyledLogo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 1rem;
  background: black;
`;

Header.Links = styled(Grid)``;

export default Header;
