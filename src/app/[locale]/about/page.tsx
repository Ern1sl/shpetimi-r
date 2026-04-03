import Image from "next/image";
import Link from "next/link";
import { font1, font2 } from "../fonts";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: t("title"),
    description: t("summary") // Using summary as the meta description
  };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden pt-[70px] md:pt-24 ${font1.className}`}
    >
      {/* LEFT SECTION */}
      <div className="w-full md:w-[60%] flex flex-col p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/20">
        {/* Header Branding */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/logo2.png"
            alt="SHPETIMI-R"
            width={60}
            height={60}
            style={{ height: "auto" }}
            sizes="60px"
            className="object-contain"
          />
          <div>
            <h2
              className={`${font2.className} text-xl md:text-2xl uppercase tracking-wider`}
            >
              SHPETIMI-R
            </h2>
            <p className="text-[10px] md:text-xs text-gray-200 tracking-[0.3em] uppercase">
              EST. 1990 · BUILT TO LAST
            </p>
          </div>
        </div>

        {/* Main Hero Text */}
        <h1
          className={`${font2.className} text-4xl md:text-5xl lg:text-6xl mb-6 leading-[0.9]`}
        >
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
          <br />
          {t("headingLine3")}
        </h1>

        {/* Summary Description */}
        <p className="text-sm md:text-base text-gray-200 max-w-xl mb-6 leading-relaxed">
          {t("summary")}
        </p>

        {/* Statistics Bar */}
        <div className="mt-auto grid grid-cols-2 gap-8 pt-6 border-t border-white/20">
          <div>
            <div
              className={`${font2.className} text-3xl md:text-4xl text-white`}
            >
              30 +
            </div>
            <div className="text-[10px] md:text-xs text-gray-200 uppercase tracking-widest mt-1">
              {t("yearsActive")}
            </div>
          </div>
          <div>
            <div
              className={`${font2.className} text-3xl md:text-4xl text-white`}
            >
              150 +
            </div>
            <div className="text-[10px] md:text-xs text-gray-200 uppercase tracking-widest mt-1">
              {t("projectsDone")}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-[40%] flex flex-col">
        {/* Box 1: Our Mission (Top) */}
        <div className="relative flex-1 p-8 md:p-10 lg:p-12 border-b border-white/20 flex flex-col group overflow-hidden">
          <div className="z-10 flex flex-col h-full">
            <Image
              src="/logo2.png"
              alt="Mission"
              width={40}
              height={40}
              style={{ height: "auto" }}
              sizes="40px"
              className="object-contain mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h2
              className={`${font2.className} text-2xl md:text-3xl mb-2 md:mb-4`}
            >
              {t("missionLabel")}
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed mb-4 md:mb-6 max-w-xs">
              {t("missionText")}
            </p>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] tracking-widest uppercase">
                SINCE 1990
              </span>
            </div>
          </div>
        </div>

        {/* Box 4 Variant: Contact (Bottom/Second) */}
        <div className="relative flex-1 p-8 md:p-10 lg:p-12 flex flex-col group overflow-hidden">
          <div className="z-10 flex flex-col h-full">
            {/* CTA Button moved to TOP per request */}
            <div className="mb-4 md:mb-6">
              <Link
                href="/form"
                className="group/btn inline-flex w-fit items-center justify-center gap-3 bg-white/5 border border-white/20 px-6 py-3 md:py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-[#36444f] transition-all duration-300"
              >
                {t("cta")}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <h2
              className={`${font2.className} text-2xl md:text-3xl mb-2 md:mb-4`}
            >
              {t("subtitle")}
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
