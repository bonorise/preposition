import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "zh-CN"] as const;

function isSupportedLocale(value: string): value is (typeof SUPPORTED_LOCALES)[number] {
  return SUPPORTED_LOCALES.includes(value as (typeof SUPPORTED_LOCALES)[number]);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] ?? "";

  if (isSupportedLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", firstSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
