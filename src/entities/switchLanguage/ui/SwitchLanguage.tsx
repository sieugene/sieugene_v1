import TranslateIcon from "@mui/icons-material/Translate";
import { Button, css } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

const SwitchLanguage = () => {
  const { lang } = useTranslation("common");
  const language = lang === "en" ? "ru" : "en";
  const router = useRouter();
  return (
    <Link passHref href={router.asPath} locale={language} key={language}>
      <div>
        <Button
          css={css`
       
          `}
        >
          <TranslateIcon />
          {lang}
        </Button>
      </div>
    </Link>
  );
};

export default SwitchLanguage;
