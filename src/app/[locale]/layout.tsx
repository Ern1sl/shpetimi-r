import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { font1, font2, font3, font4 } from "./fonts";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import SplashScreen from "@/app/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shpetimi-r.com"),
  title: {
    default: "SHPETIMI-R | Building Excellence",
    template: "%s | SHPETIMI-R"
  },
  description: "SHPETIMI-R Construction - Delivering structural integrity and timeless craftsmanship in Kosovo since 1990. Specialists in residential, commercial, and industrial projects.",
  keywords: ["construction company Kosovo", "building services Gjakova", "residential construction Kosovo", "commercial building services", "SHPETIMI-R Construction"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHPETIMI-R | Building Excellence",
    description: "Leading construction company in Kosovo specializing in high-quality residential and commercial projects.",
    url: "https://www.shpetimi-r.com",
    siteName: "SHPETIMI-R",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "SHPETIMI-R Construction Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHPETIMI-R | Building Excellence",
    description: "30+ years of construction excellence in Kosovo.",
    images: ["/logo1.png"],
  },
};

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
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <SplashScreen locale={locale} key={locale} />
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
