import type { SocialLink } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SocialLinksProps {
  links: SocialLink[];
  /** Pixel size of the icon glyph. Wrapper enforces 44px tap target. */
  iconSize?: number;
  className?: string;
}

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.84-.25z" />
    </svg>
  );
}

function ThreadsIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.067-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 8.272c.98-1.45 2.568-2.247 4.476-2.247h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.215.094.32.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65l-.004-.433.004.433zm.36-9.301c-2.317 0-3.738.928-3.66 2.354.082 1.488 1.722 2.18 3.298 2.094 1.541-.083 3.296-.682 3.59-4.116a10.66 10.66 0 0 0-2.398-.297c-.281-.022-.561-.035-.83-.035z" />
    </svg>
  );
}

const iconMap = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  threads: ThreadsIcon,
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SocialLinks({
  links,
  iconSize = 24,
  className = "",
}: SocialLinksProps) {
  return (
    <ul
      className={["flex items-center gap-2", className]
        .filter(Boolean)
        .join(" ")}
    >
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className={[
                "inline-flex items-center justify-center",
                "min-h-[44px] min-w-[44px]",
                "rounded-md",
                "text-[#1D1D1F] hover:text-[#0071E3]",
                "transition-colors duration-200 ease-in-out",
              ].join(" ")}
            >
              <Icon size={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
