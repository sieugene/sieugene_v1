import { ContactGroupBtns } from "@/entities/contact/ui/ContactGroupBtns";
import { SocialLinks } from "@/entities/contact/ui/SocialLinks";
import { Translations } from "@/shared/lib/i18n/i18n";
import { FC } from "react";

type Props = {
  t: Translations;
};

export const ContactPage: FC<Props> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <header className="space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.contact.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.contact.title}</h1>
      </header>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
        {t.contact.subtitle}
      </p>

      <ContactGroupBtns t={t} />

      <SocialLinks />
    </div>
  );
};
