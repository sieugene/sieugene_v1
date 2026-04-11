import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale, type Locale } from './src/lib/i18n'

function getLocaleFromRequest(request: NextRequest): Locale {
  // 1. Cookie
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // 2. Accept-Language header
  const acceptLang = request.headers.get('accept-language') ?? ''
  for (const part of acceptLang.split(',')) {
    const tag = part.split(';')[0].trim().toLowerCase()
    // ja
    if (tag.startsWith('ja')) return 'ja'
    // ru
    if (tag.startsWith('ru')) return 'ru'
    // en
    if (tag.startsWith('en')) return 'en'
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files like favicon.ico
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!pathnameHasLocale) {
    const locale = getLocaleFromRequest(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
