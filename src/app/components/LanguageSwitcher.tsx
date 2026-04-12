"use client";

import { useLocale } from "next-intl"; // tells us the current active language
import { Link, usePathname } from "@/i18n/navigation"; // usePathname() => gets the current URL path, so switching language keeps the user on the same page

export default function LanguageSwitcher({
  onSelect,
}: {
  onSelect?: () => void;
}) {
  // (this is an optional callback) these are component props and are used to close the mobile menu when a user slects a language
  const localeActive = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {["en", "al", "de"].map((cur) => (
        <Link
          key={cur}
          href={pathname} // stays on the same page when switching languages
          locale={cur as any} // switches the language
          replace
          onClick={() => onSelect?.()} // triggers the optional callback (e.g., closes mobile menu)
          className={`text-[10px] uppercase tracking-widest transition-colors py-2 px-1 ${
            localeActive === cur
              ? "text-white font-bold underline underline-offset-8 decoration-white/40"
              : "text-white/40 hover:text-white"
          }`} // highlights the active language
        >
          {cur === "al" ? "AL" : cur.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

//LanguageSwitcher is a tiny, reusable component that:

// Shows all supported languages.
// Keeps the user on the same page when switching.
// Highlights the current language.
// Can trigger an optional callback (like closing a menu).
// Works seamlessly with Next.js + next-intl routing.
