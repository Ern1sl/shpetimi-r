"use client";
import Link from "next/link";
import { font1, font2 } from "./fonts";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div
      className={`min-h-screen w-full bg-[rgb(54,68,79)] text-white flex flex-col items-center justify-center p-8 text-center select-none pt-[70px] md:pt-24 ${font1.className}`}
    >


      <div className="relative mb-8">
        <h1
          className={`${font2.className} text-[120px] md:text-[180px] leading-none opacity-5`}
        >
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className={`${font2.className} text-2xl md:text-4xl uppercase tracking-[0.2em]`}
          >
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-gray-300 text-[11px] md:text-xs mb-14 uppercase tracking-[0.3em] leading-relaxed opacity-70">
          {t("description")}
        </p>

        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-4 bg-white/5 border border-white/20 px-12 py-5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-[#36444f] transition-all duration-300"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          {t("return")}
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          EST. 1990
        </p>
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          {t("footer")}
        </p>
      </div>
    </div>
  );
}
