"use client";
import Link from "next/link";
import Back from "../back/page";
import { font1, font2 } from "../fonts";
import {
  LocationIcon,
  PhoneIcon,
  ClockIcon,
  ChevronDownIcon,
} from "../components/icons";
import ContactRow from "../components/ContactRow";

export default function OfficePage() {
  const mapLink = "https://maps.app.goo.gl/vMAUf8tS7SRJka8W7";

  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col-reverse md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden ${font1.className}`}
    >
      {/* Back Button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[1100]">
        <Back />
      </div>

      {/* LEFT SECTION - Map/Grid Visual */}
      <div className="relative w-full md:w-[60%] h-[450px] md:h-full border-t md:border-t-0 md:border-r border-white/10 overflow-hidden bg-[rgb(45,55,65)]">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative Map Blocks */}
        <div className="absolute top-[20%] left-[10%] w-24 h-16 bg-white/5 border border-white/5" />
        <div className="absolute top-[40%] left-[30%] w-32 h-20 bg-white/5 border border-white/5" />
        <div className="absolute top-[15%] left-[60%] w-20 h-28 bg-white/5 border border-white/5" />
        <div className="absolute top-[60%] left-[15%] w-40 h-12 bg-white/5 border border-white/5" />
        <div className="absolute bottom-[20%] right-[10%] w-28 h-32 bg-white/5 border border-white/5" />

        {/* Horizontal Line decorations */}
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute top-[50%] left-[40%] w-[20%] h-[12px] bg-white/5 transform -translate-y-1/2" />

        {/* OFFICE MARKER */}
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
            SHPETIMI-R MAIN OFFICE
          </div>
          <div className="relative">
            <div className="absolute inset-0 w-8 h-8 bg-white/20 rounded-full animate-ping" />
            <div className="w-8 h-8 border-2 border-white/40 rounded-sm flex items-center justify-center bg-[rgb(54,68,79)]">
              <div className="w-1 h-3 bg-white/60 rounded-full mb-1" />
              <div className="absolute bottom-0 translate-y-full w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Location Coordinates */}
        <div className="absolute bottom-8 left-8 flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-1">
            Location
          </span>
          <span className="text-[11px] tracking-widest text-white/80 font-light">
            42.3776° N · 20.4383° E
          </span>
        </div>

        {/* OPEN IN MAPS Button */}
        <div className="absolute top-8 right-8 md:top-auto md:bottom-8 md:right-8">
          <Link
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:gap-6 px-6 py-3 md:px-10 md:py-5 bg-white/5 border-2 border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-[10px] md:text-[10px] uppercase tracking-[0.4em]">
              Open in Maps
            </span>
            <ChevronDownIcon className="group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION - Info Pane */}
      <div className="w-full md:w-[40%] flex flex-col p-8 md:p-12 lg:p-16 justify-center bg-[rgb(54,68,79)] md:overflow-hidden">
        <span className="text-white/40 uppercase tracking-[0.3em] text-[11px] mb-4">
          MAIN OFFICE
        </span>
        <h1
          className={`${font2.className} text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] text-white font-normal`}
        >
          Come
          <br />
          see us.
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-sm mb-10 leading-relaxed font-normal">
          We believe the best projects start with a{" "}
          <span className="text-white">face-to-face conversation</span>. Visit
          our office and let's sit down to discuss your vision, timeline, and
          what we can build together.
        </p>

        {/* INFO BLOCKS */}
        <div className="space-y-8 lg:space-y-10">
          <ContactRow
            icon={<LocationIcon />}
            label="Address"
            iconBoxClassName="border-white/10 text-white/40"
            labelClassName="text-white/30"
          >
            <span className="text-[13px] lg:text-[14px] leading-relaxed tracking-widest font-normal text-white/90">
              9CHQ+28V, Gjakova 50000
              <br />
              Gjakova, Kosove
            </span>
          </ContactRow>

          <ContactRow
            icon={<PhoneIcon />}
            label="Phone"
            iconBoxClassName="border-white/10 text-white/40"
            labelClassName="text-white/30"
          >
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (43) 511 743{" "}
              <span className="text-white/80 ml-2">· Primary</span>
            </span>
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (49) 413 218{" "}
              <span className="text-white/80 ml-2">· Secondary</span>
            </span>
          </ContactRow>

          <ContactRow
            icon={<ClockIcon />}
            label="Office Hours"
            iconBoxClassName="border-white/10 text-white/40"
            labelClassName="text-white/30"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-2 lg:p-3 flex flex-col">
                <span className="text-[10px] text-white/60 uppercase tracking-widest mb-1">
                  Mon – Sat
                </span>
                <span className="text-[11px] lg:text-[12px] text-white/80 tracking-widest">
                  8:00 – 17:00
                </span>
              </div>
            </div>
          </ContactRow>

          <div className="w-14 h-[2px] bg-white/20 mt-6 lg:mt-10"></div>
        </div>
      </div>
    </div>
  );
}
