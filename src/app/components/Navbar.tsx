"use client";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation"; // usePathname is a nextjs slient component hook that allows you to read the pathname portion of the current URL
import { font4 } from "../[locale]/fonts";
import { LayersIcon } from "./icons";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const isAbout = pathname.endsWith("/about");
  const isProjects = pathname.endsWith("/projects");
  const isContact = pathname.endsWith("/form");
  const isHome = !isAbout && !isProjects && !isContact;

  // Small helper to uncheck the checkbox purely via DOM when a link is clicked
  const closeMenu = () => {
    const checkbox = document.getElementById(
      "mobile-menu-toggle",
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-[rgb(54,68,79)] h-[70px] md:h-24 flex w-full items-center justify-center md:justify-between px-6 md:px-10 lg:px-20 shadow-lg relative z-[1002]">
        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={240}
              height={60}
              style={{ height: "auto" }}
              sizes="(max-width: 768px) 150px, 240px"
              priority
              className="object-contain w-[150px] md:w-56"
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
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${isAbout ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("about")}
            </Link>
            <Link
              href="/projects"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${isProjects ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("projects")}
            </Link>
            <Link
              href="/form"
              className={`text-[11px] tracking-widest hover:text-white/70 transition-colors uppercase ${isContact ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("contact")}
            </Link>
          </div>
          <div className="h-4 w-[1px] bg-white/20 mx-4"></div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* PURE HTML/CSS MOBILE TOGGLE */}
      {/* The checkbox holds the open/closed state natively */}
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />

      {/* MOBILE DROPDOWN - Placed right below the navbar in normal flow */}
      <div className="md:hidden w-full bg-[rgb(54,68,79)] overflow-hidden shadow-xl transition-all duration-500 ease-in-out max-h-0 peer-checked:max-h-[450px] peer-checked:border-b peer-checked:border-white/5 pointer-events-none peer-checked:pointer-events-auto relative z-[1001]">
        <div
          className={`${font4.className} flex flex-col items-center py-10 space-y-8`}
        >
          <div className="flex flex-col items-center justify-center gap-6 px-4">
            {!isHome && (
              <Link
                href="/"
                onClick={closeMenu}
                className="font-medium text-[11px] tracking-[0.2em] text-white hover:text-white/70 transition-colors uppercase whitespace-nowrap"
              >
                {t("home")}
              </Link>
            )}
            <Link
              href="/about"
              onClick={closeMenu}
              className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${isAbout ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("about")}
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${isProjects ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("projects")}
            </Link>
            <Link
              href="/form"
              onClick={closeMenu}
              className={`font-medium text-[11px] tracking-[0.2em] hover:text-white/70 transition-colors uppercase whitespace-nowrap ${isContact ? "text-white font-bold underline underline-offset-8" : "text-white"}`}
            >
              {t("contact")}
            </Link>
          </div>
          <div className="h-[1px] w-16 bg-white/10 my-2"></div>
          <LanguageSwitcher onSelect={closeMenu} />
        </div>
      </div>

      {/* The label acts as the button. Since it's below the dropdown container in normal flex flow, it naturally gets pushed down identically to the dropdown's height expansion! */}
      <div className="md:hidden w-full flex justify-center pointer-events-none mt-4 transition-all duration-500 ease-in-out relative z-[1001]">
        <label
          htmlFor="mobile-menu-toggle"
          style={{ touchAction: "manipulation" }}
          className="p-3 bg-[rgb(54,68,79)] active:bg-white/10 rounded-full border border-white/10 shadow-2xl cursor-pointer pointer-events-auto"
          aria-label="Toggle menu"
        >
          <LayersIcon />
        </label>
      </div>

      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 z-[998] bg-black/20 backdrop-blur-[2px] opacity-0 pointer-events-none transition-opacity duration-500 peer-checked:opacity-100 peer-checked:pointer-events-auto"
        onClick={closeMenu}
      />
    </div>
  );
}
