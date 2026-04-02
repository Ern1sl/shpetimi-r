"use client";
import Link from "next/link";
import Image from "next/image";
import { font1, font2 } from "./fonts";

export default function NotFound() {
  return (
    <div
      className={`min-h-screen w-full bg-[rgb(54,68,79)] text-white flex flex-col items-center justify-center p-8 text-center select-none ${font1.className}`}
    >
      <div className="mb-12">
        <Image
          src="/logo2.png"
          alt="SHPETIMI-R"
          width={100}
          height={100}
          priority
          className="opacity-80 object-contain"
        />
      </div>

      <div className="relative mb-8">
        <h1
          className={`${font2.className} text-[120px] md:text-[180px] leading-none opacity-5`}
        >
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className={`${font2.className} text-2xl md:text-4xl uppercase tracking-[0.2em]`}>
            Not Found
          </h2>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-gray-300 text-[11px] md:text-xs mb-14 uppercase tracking-[0.3em] leading-relaxed opacity-70">
          The page you are looking for does not exist or has been permanently moved to a new location.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-4 bg-white/5 border border-white/20 px-12 py-5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-[#36444f] transition-all duration-300"
        >
          RETURN TO MAIN PAGE
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          EST. 1990
        </p>
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          BUILT TO LAST
        </p>
      </div>
    </div>
  );
}
