"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { PersonalInfo } from "@/data/types";
import ReachOutButton from "./ReachOutButton";
import SocialLinks from "./SocialLinks";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroSectionProps {
  data: PersonalInfo;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection({ data }: HeroSectionProps) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const showImage = data.profileImageUrl && !imgError;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text column */}
        <div className="flex-1 lg:basis-[55%] text-center lg:text-left">
          {/* Experience badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0071E3]/30 bg-[#0071E3]/5 px-3 py-1 text-xs font-medium text-[#0071E3]">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#0071E3]"
            />
            {t("hero.experienceBadge")}
          </span>

          <h1
            id="hero-heading"
            className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F]"
          >
            {data.fullName}
          </h1>

          <p className="mt-3 text-base md:text-lg font-medium text-[#0071E3]">
            {t("hero.role")}
          </p>

          <p className="mt-5 text-base md:text-lg text-[#6E6E73] leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t("hero.summary")}
          </p>

          {/* Top skills as chips (preview of expertise) */}
          <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
            {data.skills.slice(0, 7).map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <ReachOutButton />
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg border border-gray-300 bg-white text-sm font-medium text-[#1D1D1F] hover:bg-gray-50 transition-all duration-200 ease-in-out"
            >
              {t("hero.viewWork")}
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks links={data.socialLinks} iconSize={22} />
          </div>
        </div>

        {/* Image column */}
        <div className="flex-shrink-0 lg:basis-[45%] flex justify-center lg:justify-end">
          <div
            className={[
              "relative overflow-hidden rounded-full",
              "w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]",
              "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
              "ring-4 ring-white",
            ].join(" ")}
          >
            {showImage ? (
              <Image
                src={data.profileImageUrl as string}
                alt={`Foto profil ${data.fullName}`}
                fill
                priority
                sizes="(max-width: 1024px) 200px, 300px"
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                role="img"
                aria-label={`Foto profil placeholder ${data.fullName}`}
                className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center"
              >
                <span className="text-5xl lg:text-7xl font-semibold text-white/80 select-none">
                  {getInitials(data.fullName)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
