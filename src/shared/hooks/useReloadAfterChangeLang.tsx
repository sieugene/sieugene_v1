import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useReloadAfterChangeLang = () => {
  const { lang } = useTranslation();
  const [current, setCurrent] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (!current && lang) {
      setCurrent(lang);
      return;
    }
    if (lang !== current) {
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
};
