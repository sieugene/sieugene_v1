import { ROUTES } from "@/shared/lib/routes";
import { defaultLocale } from "@/shared/lib/i18n/i18n";
import { redirect } from "next/navigation";
export default function RootPage() {
  redirect(ROUTES.home(defaultLocale));
}
