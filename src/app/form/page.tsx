"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Back from "../back/page";
import { font1, font2 } from "../fonts";
import { EmailIcon, PhoneIcon, LocationIcon, ArrowRightIcon } from "../components/icons";
import ContactRow from "../components/ContactRow";

export default function InquiryForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sent" | "failed">("idle");
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const checkFormValidity = useCallback(() => {
    if (!formRef.current) return;
    const fullName = (formRef.current.elements.namedItem("fullName") as HTMLInputElement)?.value.trim();
    const email = (formRef.current.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (formRef.current.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
    setIsFormValid(!!fullName && !!email && emailValid && !!message);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "success") {
        setSubmitStatus("sent");
        setLoading(false);
        if (formRef.current) formRef.current.reset();
        setIsFormValid(false);
        setTimeout(() => setSubmitStatus("idle"), 4000);
      } else if (event.data?.type === "error") {
        setSubmitStatus("failed");
        setLoading(false);
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleSubmit = () => {
    if (!isFormValid) return;
    setLoading(true);
    setSubmitStatus("idle");
  };

  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden touch-manipulation ${font1.className}`}
      style={{ touchAction: "manipulation" }}
    >
      <iframe name="form_signal" className="hidden" />

      {/* Back Button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[1100]">
        <Back />
      </div>

      {/* LEFT SECTION - Contact Info Pane */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-20 justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[rgb(50,62,72)]/30">
        <span className="text-gray-300 uppercase tracking-widest text-[11px] mb-6">
          CONTACT US
        </span>
        <h1
          className={`${font2.className} text-6xl md:text-8xl mb-12 leading-[1.1] text-white font-normal`}
        >
          Let's build
          <br />
          together.
        </h1>
        <p className="text-white text-sm md:text-base max-w-sm mb-16 leading-relaxed opacity-90 font-normal">
          Tell us about your project and our team will get back to you within
          one business day.
        </p>

        {/* CONTACT BOXES */}
        <div className="space-y-10">
          <ContactRow icon={<EmailIcon />} label="Email">
            <span className="text-[13px] tracking-widest font-normal text-white">
              infoshpetimi.r@gmail.com
            </span>
          </ContactRow>

          <ContactRow icon={<PhoneIcon />} label="Phone">
            <span className="text-[13px] tracking-widest font-normal text-white">
              +383 49 845 035
            </span>
          </ContactRow>

          <Link
            href="/office"
            className="flex items-center gap-6 group cursor-pointer hover:bg-white/5 p-4 -m-4 transition-all duration-300 rounded-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white transition-colors">
              <LocationIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">
                Main office
              </span>
              <span className="text-[13px] tracking-widest font-normal text-white group-hover:underline underline-offset-4 decoration-white/20">
                Gjakove, Kosove
              </span>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
              <ArrowRightIcon />
            </div>
          </Link>

          <div className="w-16 h-[2px] bg-white opacity-40 mt-12"></div>
        </div>
      </div>

      {/* RIGHT SECTION - The Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 overflow-y-auto md:overflow-hidden custom-scrollbar relative z-[999] bg-[rgb(54,68,79)] md:justify-center">
        <div className="flex justify-between items-end mb-10">
          <h2 className={`${font2.className} text-4xl text-white font-normal`}>
            Project inquiry
          </h2>
          <span className="text-[9px] uppercase tracking-widest text-white opacity-60">
            * Required fields
          </span>
        </div>

        <form
          ref={formRef}
          action="/form/api"
          method="POST"
          target="form_signal"
          className="space-y-8 max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
            <div className="flex flex-col relative">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
                Full Name *
              </label>
              <input
                name="fullName"
                required
                placeholder="John Davies"
                onChange={checkFormValidity}
                className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none text-white pointer-events-auto transition-all placeholder:text-gray-600 font-normal"
              />
            </div>
            <div className="flex flex-col relative">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
                Company
              </label>
              <input
                name="company"
                placeholder="Acme Corp"
                className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none text-white pointer-events-auto transition-all placeholder:text-gray-600 font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col relative pointer-events-auto">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              onChange={checkFormValidity}
              className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none text-white pointer-events-auto transition-all placeholder:text-gray-600 font-normal"
            />
          </div>

          <div className="flex flex-col relative pointer-events-auto">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80">
              Tell us about your inquiry *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Describe your project scope..."
              onChange={checkFormValidity}
              className="bg-transparent border-b border-white/30 py-3 focus:border-white outline-none resize-none text-white pointer-events-auto transition-all placeholder:text-gray-600 font-normal"
            />
          </div>

          <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-8 pointer-events-auto">
            <p className="text-[9px] text-white uppercase tracking-widest italic opacity-60 leading-relaxed max-w-[200px] font-normal">
              Your information is kept confidential
              <br />
              and never shared.
            </p>
            <div className="flex items-center gap-6">
              {submitStatus !== "idle" && (
                <span
                  className={`hidden md:inline text-[11px] uppercase tracking-[0.3em] font-normal transition-opacity duration-500 ${
                    submitStatus === "sent"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                  style={{ opacity: 0.5 }}
                >
                  {submitStatus === "sent" ? "Sent ✓" : "Failed ✗"}
                </span>
              )}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`px-12 py-5 text-[10px] font-normal uppercase tracking-[0.4em] transition-all duration-300 border-2 shadow-2xl shadow-black/20 ${
                  isFormValid && !loading
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white cursor-pointer"
                    : "bg-white/5 text-gray-500 border-white/10 cursor-not-allowed"
                }`}
              >
                {loading ? "PROCESS..." : "Send inquiry →"}
              </button>
            </div>
          </div>
        </form>

        {submitStatus !== "idle" && (
          <div className="md:hidden mt-6 text-center">
            <span
              className={`text-[11px] uppercase tracking-[0.3em] font-normal ${
                submitStatus === "sent"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
              style={{ opacity: 0.5 }}
            >
              {submitStatus === "sent" ? "Inquiry sent successfully ✓" : "Failed to send ✗"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
