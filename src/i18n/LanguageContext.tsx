"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { id as idTranslations } from "./id";
import { en as enTranslations } from "./en";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Locale = "id" | "en";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "portfolio-locale";

// ─── Context ──────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ─── Helper: read locale from localStorage safely ─────────────────────────────

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "id";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    // Private browsing mode or storage access denied — fall through to default
  }
  return "id";
}

// ─── Helper: traverse a nested object with dot-separated keys ─────────────────

function lookupKey(obj: unknown, keys: string[]): string | undefined {
  let current: unknown = obj;
  for (const k of keys) {
    if (typeof current === "object" && current !== null) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initializer: reads localStorage once on mount (client-side only)
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {
        // Private browsing mode — state update still succeeds, persistence silently fails
      }
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    const translations = locale === "en" ? enTranslations : idTranslations;

    // Try active locale first
    const value = lookupKey(translations, keys);
    if (value !== undefined) return value;

    // Fallback to Indonesian translations
    const fallback = lookupKey(idTranslations, keys);
    if (fallback !== undefined) return fallback;

    // Last resort: return the key itself
    return key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return context;
}
