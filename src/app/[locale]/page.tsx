import { font1, font2, font3 } from "./fonts";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
} from "@/app/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("seoTitle"),
    description: t("description"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 scale-x-[-1]">
          <Image
            src="/background.jpg"
            alt="SHPETIMI-R Construction Site"
            fill
            priority
            unoptimized
            quality={100}
            sizes="100vw"
            className="object-cover object-[25%_center] md:object-center"
          />
        </div>

        <div className="bg-black/40 absolute backdrop-blur-md bottom-0 left-0 w-full h-[40%] md:top-0 md:left-0 md:h-full md:w-[50%] lg:w-[48%] xl:w-[45%] pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-full h-[40%] md:top-0 md:h-full md:w-[50%] lg:w-[48%] xl:w-[45%] flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 z-10 px-4 md:px-10 lg:px-12 xl:px-16 -translate-y-6 md:translate-y-0">
          <h3
            className={`${font2.className} text-gray-200 text-[10px] md:text-[13px] lg:text-[15px] translate-y-[-20px] md:translate-y-0 tracking-[0.4em] uppercase opacity-70`}
          >
            SHPETIMI-R CONSTRUCTION
          </h3>

          <h1
            className={`${font1.className} text-[21px] md:text-[28px] lg:text-[34px] xl:text-[40px] text-[rgb(54,68,79)] md:text-white text-center md:text-left translate-y-[-285px] md:translate-y-0 leading-tight uppercase flex flex-col items-center md:items-start`}
          >
            <span className="whitespace-nowrap">{t("title")}</span>
            <span className="whitespace-nowrap">{t("subtitle")}</span>
          </h1>

          <h3
            className={`${font1.className} md:max-w-[650px] text-white text-[10px] md:text-[12px] lg:text-[16px] translate-y-[-94px] md:translate-y-0 uppercase opacity-85 text-center md:text-left`}
          >
            {t("description")}
          </h3>
        </div>

        <div
          className={`${font3.className} absolute bottom-10 left-0 w-full px-4 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-4 z-20`}
        >
          {/* BUTTONS */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4 w-full md:w-auto">
            <Link
              href="/form"
              className="h-14 md:h-16 flex items-center justify-center border border-white text-white rounded-lg transition-all duration-300 tracking-wider bg-transparent hover:bg-white/10 whitespace-nowrap text-xs md:text-sm lg:text-base px-6 md:px-10 w-40 sm:w-48 md:w-72 lg:w-80"
            >
              {t("cta")}
            </Link>
            <Link
              href="/office"
              className="md:hidden h-14 flex items-center justify-center border border-white text-white rounded-lg transition-all duration-300 tracking-wider font-medium bg-transparent hover:bg-white/10 whitespace-nowrap text-xs px-6 md:px-10 w-40 sm:w-48"
            >
              {t("office")}
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center justify-center md:justify-start gap-5 w-full md:w-auto translate-y-0.5 md:ml-4 lg:ml-6">
            <a
              href="https://www.instagram.com/shpetimi_r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
              title="Instagram"
            >
              <InstagramIcon size={22} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100065621764033"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
              title="Facebook"
            >
              <FacebookIcon size={22} />
            </a>
            <a
              href="https://www.threads.net/@shpetimi_r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
              title="Threads"
            >
              <ThreadsIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
