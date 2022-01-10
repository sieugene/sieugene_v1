import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "shared/lib";

const Header = () => {
  const { t, lang } = useTranslation("common");

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
  const language = lang === "en" ? "ru" : "en";
  const router = useRouter();

  return (
    <header>
      <Wrapper>
        <div>
          <Header.LogoSection>
            <Link
              passHref
              href={router.asPath}
              locale={language}
              key={language}
            >
              <Header.StyledLogo>{lang}</Header.StyledLogo>
            </Link>
            <Link href={ROUTES.home}>
              <a href={ROUTES.home}>
                <h1>Eugene.Poluakov</h1>
              </a>
            </Link>
          </Header.LogoSection>
        </div>

        <Header.Links>
          {links?.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <a href={link.href}>{link.title}</a>
              </Link>
            );
          })}
        </Header.Links>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    justify-content: center;
  }
`;

Header.LogoSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    margin-top: 10px;
  }
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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: capitalize;
  cursor: pointer;
`;

Header.Links = styled.div`
  a {
    &:not(:last-child) {
      margin-right: 1rem;
    }

    cursor: pointer;
    transition: 0.3s all ease;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.grayish};
    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    margin-top: 10px;
  }
`;

export default Header;
