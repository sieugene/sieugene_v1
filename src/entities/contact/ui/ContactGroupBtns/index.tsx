import { Translations } from "@/shared/lib/i18n/i18n";
import { Button } from "@/shared/ui/Button";
import { FC } from "react";
import { GITHUB_LINK, WORK_EMAIL } from "../../lib/constants";

type Props = {
  t: Translations;
};
export const ContactGroupBtns: FC<Props> = ({ t }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button as="a" href={`mailto:${WORK_EMAIL}`} size="lg">
        {t.contact.email}
      </Button>
      <Button
        as="a"
        href={GITHUB_LINK}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="lg"
      >
        {t.contact.github} ↗
      </Button>
    </div>
  );
};
