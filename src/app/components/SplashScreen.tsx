"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { font2 } from "../[locale]/fonts";

// Module-level variables to persist state aggressively even if Next.js fully remounts the layout.
let initialLoad = true;
let globalPrevLocale: string | undefined = undefined;
let targetCloseTime = 0;

export default function SplashScreen({ locale }: { locale?: string }) {
  const t = useTranslations("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let duration = 0;

    const isLocaleChange = !initialLoad && globalPrevLocale !== undefined && globalPrevLocale !== locale;

    if (initialLoad) {
      // First page load: show the full cinematic splash screen
      initialLoad = false;
      globalPrevLocale = locale;
      duration = 1800;
      targetCloseTime = now + duration;
    } 
    else if (isLocaleChange) {
      // Language switch: show a quick shortened version
      globalPrevLocale = locale;
      duration = 800;
      targetCloseTime = now + duration;
    }

    // If an animation is legally active (either just started, or interrupted by Strict Mode)
    if (targetCloseTime > now) {
      const remaining = targetCloseTime - now;
      
      // If we jumped in mid-animation, figure out which mode we're supposed to be in
      setIsShort(targetCloseTime - now <= 1000);
      setIsVisible(true);
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }, remaining);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    } else {
      // Not active but component might have SSR'd as visible. Immediately hide.
      setIsVisible(false);
      document.body.style.overflow = "auto";
      globalPrevLocale = locale;
    }
  }, [locale]);

  // Timings based on short vs full
  const curtainDuration = isShort ? 0.6 : 1.4;
  const logoDuration = isShort ? 0.4 : 1.2;
  const taglineDelay = isShort ? 0.2 : 0.6;
  const taglineDuration = isShort ? 0.4 : 1;
  const progressDuration = isShort ? 0.8 : 2.2;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`splash-${locale}`}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: curtainDuration, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[rgb(54,68,79)] overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="flex flex-col items-center relative z-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: logoDuration, ease: "easeOut" }}
              className="relative w-[200px] md:w-[320px] h-[100px] md:h-[160px] mb-8"
            >
              <Image
                src="/logo1.png"
                alt="Logo"
                fill
                priority
                sizes="(max-width: 768px) 200px, 320px"
                className="object-contain"
              />
            </motion.div>

            {/* Tagline Animation - Skips mostly or goes fast on short mode */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: taglineDelay, duration: taglineDuration }}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`${font2.className} text-white text-[11px] md:text-[13px] tracking-[0.5em] uppercase whitespace-nowrap opacity-80`}
              >
                {t("title")}
              </span>
              <div className="w-10 h-[1px] bg-white/20 my-6"></div>
              {!isShort && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-white text-[9px] tracking-[0.4em] uppercase"
                >
                  Gjakova, Kosove
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Bottom Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: progressDuration, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
