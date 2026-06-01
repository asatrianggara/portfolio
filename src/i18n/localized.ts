import type { Locale } from "./LanguageContext";
import type { Localized } from "@/data/types";

/**
 * Read a `Localized<T>` value for the active locale.
 * If the value is a plain T (string, array, etc.), it's returned as-is — the
 * `{ id, en }` shape is only required when the content actually differs.
 */
export function pickLocalized<T>(value: Localized<T>, locale: Locale): T;
export function pickLocalized<T>(
  value: Localized<T> | undefined,
  locale: Locale
): T | undefined;
export function pickLocalized<T>(
  value: Localized<T> | undefined,
  locale: Locale
): T | undefined {
  if (value === undefined) return undefined;
  if (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    "id" in value &&
    "en" in value
  ) {
    return (value as { id: T; en: T })[locale];
  }
  return value as T;
}
