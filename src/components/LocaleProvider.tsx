"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/data/types";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from "@/data/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  locales: Locale[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      locales: SUPPORTED_LOCALES,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      locales: SUPPORTED_LOCALES,
    };
  }
  return context;
}

export function normalizeLocale(value: string): Locale {
  if (isSupportedLocale(value)) {
    return value;
  }
  return DEFAULT_LOCALE;
}
