"use client";
import Navbar from "./navbar/navbar";
import { font1, font2, font3, font4 } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-[position:25%_center] md:bg-center -z-10 scale-x-[-1]"></div>

        <div className="bg-black/30 absolute backdrop-blur-md bottom-0 left-0 w-full h-[40%] md:top-0 md:left-0 md:h-full md:w-[45%] pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-full h-[40%] md:top-0 md:h-full md:w-[50%] lg:w-[45%] flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 z-10 px-4 md:px-12 lg:px-20 -translate-y-6 md:translate-y-0">
          <h3
            className={`${font2.className} text-gray-200 text-[10px] md:text-[13px] lg:text-[15px] translate-y-0 tracking-[0.4em] uppercase opacity-70`}
          >
            SHPETIMI-R CONSTRUCTION
          </h3>

          <h1
            className={`${font1.className} text-[rgb(54,68,79)] md:text-white text-[27px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-center md:text-left translate-y-[-285px] md:translate-y-0 leading-tight uppercase flex flex-col items-center md:items-start`}
          >
            <span className="whitespace-nowrap">BUILDING EXCELLENCE</span>
            <span className="whitespace-nowrap">BRICK BY BRICK</span>
          </h1>

          <h3
            className={`${font1.className} md:max-w-[650px] text-white text-[10px] md:text-[12px] lg:text-[16px] translate-y-[-80px] md:translate-y-0 uppercase opacity-85 text-center md:text-left`}
          >
            We are a trusted construction company dedicated to delivering
            exceptional quality and craftsmanship in every project we undertake,
            combining innovative design, skilled workmanship, and efficient
            project management to create structures that are both functional and
            visually impressive.
          </h3>
        </div>

        <div
          className={`${font3.className} absolute bottom-10 left-0 w-full md:left-12 lg:left-20 flex flex-row items-center justify-center md:justify-start gap-4 z-20`}
        >
          <Link
            href="/form"
            className="md:w-60 md:h-16 flex items-center justify-center border border-white text-white rounded-lg text-sm lg:text-base px-6 py-3 w-40 lg:w-44 bg-transparent hover:bg-white/10 transition-all duration-300 tracking-wider"
          >
            GET IN TOUCH
          </Link>
          <Link
            href="/office"
            className="md:hidden flex items-center justify-center border border-white text-white rounded-lg text-sm px-6 py-3 w-40 bg-transparent hover:bg-white/10 transition-all duration-300 tracking-wider font-medium"
          >
            MAIN OFFICE
          </Link>
        </div>
      </div>
    </>
  );
}
