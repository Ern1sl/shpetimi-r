"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { font2 } from "../[locale]/fonts";

export default function SplashScreen({ locale }: { locale?: string }) {
  const t = useTranslations("Home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={locale || "splash"}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }} // "Curtain" ease-in-out
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[rgb(54,68,79)] overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }}
          />

          <div className="flex flex-col items-center relative z-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
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

            {/* Tagline Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              <span className={`${font2.className} text-white text-[11px] md:text-[13px] tracking-[0.5em] uppercase whitespace-nowrap opacity-80`}>
                {t("title")}
              </span>
              <div className="w-10 h-[1px] bg-white/20 my-6"></div>
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.5 }}
                 transition={{ delay: 1.2, duration: 0.8 }}
                 className="text-white text-[9px] tracking-[0.4em] uppercase"
              >
                Gjakova, Kosove
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom Progress Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
