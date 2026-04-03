"use client";
import React, { useState } from "react";
import Link from "next/link";
import { font1, font2 } from "../fonts";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  ArrowRightIcon,
} from "@/app/components/icons";
import ContactRow from "@/app/components/ContactRow";
import { useTranslations } from "next-intl";

export default function InquiryFormClient({ locale }: { locale: string }) {
  const t = useTranslations("Form");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden touch-manipulation pt-[70px] md:pt-24 ${font1.className}`}
      style={{ touchAction: "manipulation" }}
    >
      {/* LEFT SECTION - Contact Info Pane */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-8 lg:p-12 xl:p-16 justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[rgb(50,62,72)]/30 overflow-y-auto md:overflow-y-hidden custom-scrollbar">
        <span className="text-gray-300 uppercase tracking-widest text-[11px] mb-4 md:mb-6">
          {t("contact")}
        </span>
        <h1
          className={`${font2.className} text-4xl md:text-5xl xl:text-5xl mb-6 md:mb-8 leading-[1.1] text-white font-normal break-words`}
        >
          {t("headline")
            .split("\n")
            .map((line: string, i: number) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </h1>
        <p className="text-white text-sm md:text-base max-w-sm mb-10 md:mb-12 leading-relaxed opacity-90 font-normal">
          {t("description")}
        </p>

        {/* CONTACT BOXES */}
        <div className="space-y-6 md:space-y-8">
          <ContactRow icon={<EmailIcon />} label="Email">
            <span className="text-[13px] tracking-widest font-normal text-white">
              infoshpetimi.r@gmail.com
            </span>
          </ContactRow>

          <ContactRow icon={<PhoneIcon />} label="Phone">
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (43) 511 743{" "}
              <span className="text-white/80 ml-2">· {t("primary")}</span>
            </span>
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (49) 413 218{" "}
              <span className="text-white/80 ml-2">· {t("secondary")}</span>
            </span>
          </ContactRow>

          <Link
            href="/office"
            className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 -m-4 transition-all duration-300 rounded-sm"
          >
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white transition-colors">
              <LocationIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">
                {t("mainOffice")}
              </span>
              <span className="text-[13px] tracking-widest font-normal text-white group-hover:underline underline-offset-4 decoration-white/20">
                {t("headquartersLocation")}
              </span>
            </div>
            <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
              <ArrowRightIcon />
            </div>
          </Link>

          <div className="w-16 h-[2px] bg-white opacity-40 mt-12"></div>
        </div>
      </div>

      {/* RIGHT SECTION - The Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-8 lg:p-12 overflow-y-auto md:overflow-y-hidden custom-scrollbar relative z-10 bg-[rgb(54,68,79)] md:justify-center">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-2 xl:gap-0 mb-6 md:mb-8">
          <h2 className={`${font2.className} text-3xl text-white font-normal`}>
            {t("title")}
          </h2>
          <span className="text-[9px] uppercase tracking-widest text-white opacity-60">
            * {t("required")}
          </span>
        </div>

        <form
          action={`/${locale}/form/api`}
          method="POST"
          className="group space-y-6 md:space-y-8 max-w-lg"
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
            <div className="flex flex-col relative">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
                {t("fullName")} *
              </label>
              <input
                name="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("placeholderName")}
                className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600"
              />
            </div>
            <div className="flex flex-col relative">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
                {t("phone")} *
              </label>
              <input
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("placeholderPhone")}
                className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="flex flex-col relative pointer-events-auto">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
              {t("email")}
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholderEmail")}
              className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col relative pointer-events-auto">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
              {t("message")} *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("placeholderMessage")}
              className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none resize-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600"
            />
          </div>

          <div className="pt-4 flex flex-col xl:flex-row xl:items-center justify-between gap-8 pointer-events-auto">
            <p className="text-[9px] text-white uppercase tracking-[0.2em] xl:tracking-widest italic opacity-60 leading-relaxed xl:max-w-[200px] font-normal w-full">
              {t("confidential")}
            </p>
            <div className="flex items-center gap-6 self-start xl:self-auto w-full xl:w-auto">
              <button
                type="submit"
                className="px-8 xl:px-12 py-4 xl:py-5 w-full xl:w-auto text-[9px] xl:text-[10px] font-normal uppercase tracking-[0.2em] xl:tracking-[0.4em] transition-all duration-300 border-2 shadow-2xl shadow-black/20 group-invalid:bg-white/5 group-invalid:text-gray-500 group-invalid:border-white/10 group-invalid:cursor-not-allowed group-valid:bg-white group-valid:text-black group-valid:border-white group-valid:hover:bg-transparent group-valid:hover:text-white group-valid:cursor-pointer"
              >
                {t("button")} →
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
