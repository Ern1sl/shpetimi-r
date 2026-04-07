import { font1, font2, font3 } from "../fonts";
import { getTranslations } from "next-intl/server";
import ProjectVideo from "@/app/components/ProjectVideo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  const videos = [
    { src: "/video.mp4", id: 1 },
    { src: "/video2.mp4", id: 2 },
    { src: "/video3.mp4", id: 3 },
    { src: "/video4.MP4", id: 4 },
  ];

  return (
    <main className="min-h-screen bg-[rgb(54,68,79)] pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16 md:mb-24 space-y-6">
          <h3 className={`${font2.className} text-gray-400 text-[10px] md:text-xs tracking-[0.5em] uppercase opacity-80`}>
            SHPETIMI-R CONSTRUCTION
          </h3>
          <h1 className={`${font1.className} text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-tight tracking-tight max-w-4xl`}>
            {t("title")}
          </h1>
          <div className="w-12 h-[1px] bg-white/30 my-8"></div>
          <p className={`${font3.className} text-gray-400 max-w-2xl text-base md:text-xl leading-relaxed font-light`}>
            {t("description")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {videos.map((video) => (
            <ProjectVideo key={video.id} src={video.src} id={video.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
