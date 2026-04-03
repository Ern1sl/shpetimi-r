import { Brawler, DM_Serif_Display, Gelasio, Merriweather } from "next/font/google";

export const font1 = Brawler({
  weight: "400",
  variable: "--font-brawler",
  subsets: ["latin"],
});

export const font2 = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

export const font3 = Gelasio({
  weight: "400",
  variable: "--font-gelasio",
  subsets: ["latin"],
});

export const font4 = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
  subsets: ["latin"],
});