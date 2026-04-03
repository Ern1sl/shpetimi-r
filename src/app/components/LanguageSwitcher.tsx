"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const localeActive = useLocale();
  const pathname = usePathname();

  const getPath = (nextLocale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-4">
      {["en", "al", "de"].map((cur) => (
        <Link
          key={cur}
          href={getPath(cur)}
          replace
          className={`text-[10px] uppercase tracking-widest transition-colors ${
            localeActive === cur
              ? "text-white font-bold underline underline-offset-4 decoration-white/30"
              : "text-white/40 hover:text-white"
          }`}
        >
          {cur === "al" ? "AL" : cur.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
