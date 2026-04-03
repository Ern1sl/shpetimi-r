"use client";
import Image from "next/image";
import Link from "next/link";
import { font4 } from "../[locale]/fonts";
import { LayersIcon } from "./icons";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const isAbout = pathname.endsWith("/about");
  const isProjects = pathname.endsWith("/projects");
  const isContact = pathname.endsWith("/form");
  const isOffice = pathname.endsWith("/office");
  const isHome = !isAbout && !isProjects && !isContact && !isOffice;

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] h-fit">
      <nav className="bg-[rgb(54,68,79)] h-[70px] md:h-24 flex items-center justify-center md:justify-between px-6 md:px-10 lg:px-20 shadow-lg relative z-[1000]">
        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="(max-width: 768px) 150px, 240px"
              priority
              className="object-contain w-[150px] md:w-56 h-auto"
            />
          </Link>
        </div>

        {/* NAVIGATION LINKS & Language Switcher (Desktop) */}
        <div className="hidden md:flex items-center space-x-12 mr-0">
          <div
            className={`${font4.className} flex items-center space-x-8 lg:space-x-12`}
          >
            {!isHome && (
              <Link
                href="/"
                className="text-[11px] tracking-widest text-white hover:text-white/70 transition-colors uppercase"
              >
                {t("home")}
              </Link>
            )}
            <Link
              href="/about"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${
                isAbout ? "text-white font-bold underline underline-offset-8" : "text-white"
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href="/projects"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${
                isProjects ? "text-white font-bold underline underline-offset-8" : "text-white"
              }`}
            >
              {t("projects")}
            </Link>
            <Link
              href="/form"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${
                isContact ? "text-white font-bold underline underline-offset-8" : "text-white"
              }`}
            >
              {t("contact")}
            </Link>
            <Link
              href="/office"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${
                isOffice ? "text-white font-bold underline underline-offset-8" : "text-white"
              }`}
            >
              {t("office")}
            </Link>
          </div>

          <div className="h-4 w-[1px] bg-white/20 mx-4"></div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className="md:hidden w-full flex flex-col items-center">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        <div className="w-full bg-[rgb(54,68,79)] overflow-hidden transition-all duration-500 ease-in-out shadow-xl max-h-0 peer-checked:max-h-[400px] peer-checked:border-b peer-checked:border-white/5 pointer-events-none peer-checked:pointer-events-auto">
          <div
            className={`${font4.className} flex flex-col items-center py-10 space-y-8`}
          >
            <div className="flex flex-col items-center justify-center gap-6 px-4">
              {!isHome && (
                <Link
                  href="/"
                  className="font-medium text-[11px] tracking-[0.2em] text-white hover:text-white/70 transition-colors uppercase whitespace-nowrap"
                >
                  {t("home")}
                </Link>
              )}
              <Link
                href="/about"
                className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${
                  isAbout ? "text-white font-bold" : "text-white"
                }`}
              >
                {t("about")}
              </Link>
              <Link
                href="/projects"
                className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${
                  isProjects ? "text-white font-bold" : "text-white"
                }`}
              >
                {t("projects")}
              </Link>
              <Link
                href="/form"
                className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${
                  isContact ? "text-white font-bold" : "text-white"
                }`}
              >
                {t("contact")}
              </Link>
            </div>

            <div className="w-16 h-[1px] bg-white/10 my-2"></div>
            <LanguageSwitcher />
          </div>
        </div>

        <label
          htmlFor="menu-toggle"
          className="mt-4 p-3 bg-white/5 active:bg-white/10 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/5 outline-none select-none cursor-pointer pointer-events-auto shadow-2xl"
        >
          <LayersIcon />
        </label>
      </div>
    </div>
  );
}
