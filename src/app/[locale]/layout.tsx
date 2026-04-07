import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { font1, font2, font3, font4 } from "./fonts";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import SplashScreen from "@/app/components/SplashScreen";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.shpetimi-r.com";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "SHPETIMI-R | Building Excellence",
      template: "%s | SHPETIMI-R",
    },
    description:
      "SHPETIMI-R Construction - Delivering structural integrity and timeless craftsmanship in Kosovo since 1990. Specialists in residential, commercial, and industrial projects.",
    keywords: [
      "construction company Kosovo",
      "building services Gjakova",
      "residential construction Kosovo",
      "commercial building services",
      "SHPETIMI-R Construction",
    ],
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        sq: `${baseUrl}/al`,
        de: `${baseUrl}/de`,
      },
    },
    openGraph: {
      title: "SHPETIMI-R | Building Excellence",
      description:
        "Leading construction company in Kosovo specializing in high-quality residential and commercial projects.",
      url: baseUrl,
      siteName: "SHPETIMI-R",
      images: [
        {
          url: "/logo1.png",
          width: 1200,
          height: 630,
          alt: "SHPETIMI-R Construction Logo",
        },
      ],
      locale: locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "sq_AL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SHPETIMI-R | Building Excellence",
      description: "30+ years of construction excellence in Kosovo.",
      images: ["/logo1.png"],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <SplashScreen locale={locale} key={locale} />
        <Navbar />
        {children}
        <SpeedInsights />
      </NextIntlClientProvider>
    </>
  );
}
