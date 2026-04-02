"use client";
import Back from "../back/page";
import Image from "next/image";
import Link from "next/link";
import { font1, font2 } from "../fonts";

export default function About() {
  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden ${font1.className}`}
    >
      {/* Floating Back Button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        <Back />
      </div>

      {/* LEFT SECTION */}
      <div className="w-full md:w-[60%] flex flex-col p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/20">
        {/* Header Branding */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/logo2.png"
            alt="SHPETIMI-R"
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <h2
              className={`${font2.className} text-xl md:text-2xl uppercase tracking-wider`}
            >
              SHPETIMI-R
            </h2>
            <p className="text-[10px] md:text-xs text-gray-200 tracking-[0.3em] uppercase">
              EST. 1990 ◦ BUILT TO LAST
            </p>
          </div>
        </div>

        {/* Main Hero Text */}
        <h1
          className={`${font2.className} text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]`}
        >
          We build
          <br />
          what
          <br />
          endures.
        </h1>

        {/* Summary Description */}
        <p className="text-sm md:text-base text-gray-200 max-w-xl mb-6 leading-relaxed">
          From ground-breaking to ribbon-cutting, SHPETIMI-R Construction
          delivers structural integrity and timeless craftsmanship across
          residential, commercial, industrial, and infrastructure projects. Our
          team handles every stage of your project, from planning to final
          inspection, ensuring smooth execution.
        </p>

        {/* Statistics Bar */}
        <div className="mt-auto grid grid-cols-3 gap-8 pt-6 border-t border-white/20">
          <div>
            <div
              className={`${font2.className} text-3xl md:text-4xl text-white`}
            >
              30 +
            </div>
            <div className="text-[10px] md:text-xs text-gray-200 uppercase tracking-widest mt-1">
              Years Active
            </div>
          </div>
          <div>
            <div
              className={`${font2.className} text-3xl md:text-4xl text-white`}
            >
              150 +
            </div>
            <div className="text-[10px] md:text-xs text-gray-200 uppercase tracking-widest mt-1">
              Projects Done
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
              className="object-contain mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h2
              className={`${font2.className} text-2xl md:text-3xl mb-2 md:mb-4`}
            >
              Our Mission
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed mb-4 md:mb-6 max-w-xs">
              Deliver structures that outlive trends — built with precision and
              purpose on every project.
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
                className="group/btn flex items-center gap-3 bg-white/5 border border-white/20 px-6 py-3 md:py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-[#36444f] transition-all duration-300"
              >
                CONTACT US
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <h2
              className={`${font2.className} text-2xl md:text-3xl mb-2 md:mb-4`}
            >
              Ready to build?
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
              Let's discuss your next project from the ground up. Our team is
              ready to deliver excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
