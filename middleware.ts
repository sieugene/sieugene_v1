import { defaultLocale, Locales, locales } from "@/shared/lib/i18n/i18n";
import { NextRequest, NextResponse } from "next/server";

function getLocaleFromRequest(request: NextRequest): Locales {
  const cookie = request.cookies.get("locale")?.value;
  if (cookie && locales.includes(cookie as Locales)) {
    return cookie as Locales;
  }

  const accept = request.headers.get("accept-language") ?? "";

  for (const part of accept.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();

    for (const locale of locales) {
      if (tag.startsWith(locale)) return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // files like favicon.ico
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!pathnameHasLocale) {
    const locale = getLocaleFromRequest(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
