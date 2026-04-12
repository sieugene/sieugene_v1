
import { Translations } from '@/shared/lib/i18n/i18n';
import { Button } from "@/shared/ui/Button";
import { FC } from "react";

type Props = {
  t: Translations;
};
export const ContactGroupBtns: FC<Props> = ({ t }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button as="a" href="mailto:eugenepoluakov@gmail.com" size="lg">
        {t.contact.email}
      </Button>
      <Button
        as="a"
        href="https://github.com/sieugene"
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
