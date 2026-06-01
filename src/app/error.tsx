"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    // Log to your reporting service in a real app
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center min-h-[60vh] gap-5 px-4 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F]">
        {t("error.loadFailed")}
      </h2>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg bg-[#0071E3] text-white text-sm font-medium hover:bg-[#0077ED] transition-all duration-200 ease-in-out"
      >
        {t("error.reload")}
      </button>
    </div>
  );
}
