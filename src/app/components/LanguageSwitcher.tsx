"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher({ onSelect }: { onSelect?: () => void }) {
  const localeActive = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {["en", "al", "de"].map((cur) => (
        <Link
          key={cur}
          href={pathname}
          locale={cur as any}
          replace
          onClick={() => onSelect?.()}
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
