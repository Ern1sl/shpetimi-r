"use client";
import Image from "next/image";
import Link from "next/link";
import { font4 } from "../fonts";
import { LayersIcon } from "../components/icons";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav className="bg-[rgb(54,68,79)] h-[70px] md:h-24 flex items-center justify-center md:justify-between px-6 md:px-10 lg:px-20 shadow-lg relative z-50 pointer-events-auto">
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 150px, 240px"
            priority
            className="object-contain w-[150px] md:w-56 h-auto"
          />
        </div>

        <div
          className={`${font4.className} hidden md:flex items-center space-x-6 lg:space-x-12 mr-0`}
        >
          <Link
            href="/about"
            className="text-white text-sm hover:text-white/70 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/projects"
            className="text-white text-sm hover:text-white/70 transition-colors"
          >
            PROJECTS
          </Link>
          <Link
            href="/form"
            className="text-white text-sm hover:text-white/70 transition-colors"
          >
            CONTACT US
          </Link>
          <Link
            href="/office"
            className="text-white text-sm hover:text-white/70 transition-colors"
          >
            MAIN OFFICE
          </Link>
        </div>
      </nav>

      <div className="md:hidden w-full flex flex-col items-center pointer-events-none">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        <div className="w-full bg-[rgb(54,68,79)] overflow-hidden transition-all duration-500 ease-in-out shadow-xl max-h-0 peer-checked:max-h-60 peer-checked:border-b peer-checked:border-white/5 pointer-events-none peer-checked:pointer-events-auto">
          <div
            className={`${font4.className} flex items-center justify-center space-x-8 py-8`}
          >
            <Link
              href="/about"
              className="text-white font-medium text-xs tracking-[0.2em] hover:text-white/70 transition-colors uppercase"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-white font-medium text-xs tracking-[0.2em] hover:text-white/70 transition-colors uppercase"
            >
              Projects
            </Link>
            <Link
              href="/form"
              className="text-white font-medium text-xs tracking-[0.2em] hover:text-white/70 transition-colors uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <label
          htmlFor="menu-toggle"
          className="mt-4 p-3 bg-white/5 active:bg-white/10 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/5 outline-none select-none cursor-pointer pointer-events-auto"
        >
          <LayersIcon />
        </label>
      </div>
    </div>
  );
}
