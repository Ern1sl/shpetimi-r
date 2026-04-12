import type { Metadata } from "next"; // Type from Next.js for defining page metadata (title, description, OG tags, etc.)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl"; // Provider for translations (i18n) in the client.
import { getMessages } from "next-intl/server"; // Function to fetch translation messages for the selected locale.
import Navbar from "@/app/components/Navbar";
import SplashScreen from "@/app/components/SplashScreen";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Vercel analytics component for measuring speed and performance.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  // this is a special nextsjs function that lets you dynamically generate metadata for a page, metadate includes things like: page title, description, open graph tags for social sharing, twitter cards, keywords. It runs on the server beore the page is rendered, it must return n objet matching the metadata type
  params,
}: {
  params: Promise<{ locale: string }>; // params is supposed to be the route parametersfor the current page, Example: if your route is /[locale]/about, then params will be { locale: "en" } if the URL is /en/about.
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
  // Ensures the page is mobile-friendly.Tells the browser to scale the content correctly on different devices.
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  // This is your main layout for the app. All pages are wrapped in this component.
  //params contains the current locale (language).
  //getMessages(locale) fetches translation strings for the selected language.
  //NextIntlClientProvider wraps everything and provides i18n context.
  //Inside the layout:
  //SplashScreen – a loading or intro screen shown first.
  //Navbar – top navigation bar.
  //children – the page content.
  //SpeedInsights – Vercel’s performance analytics overlay.
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
        <SplashScreen locale={locale} />
        <Navbar />
        {children}
        <SpeedInsights />
      </NextIntlClientProvider>
    </>
  );
}

// Summary
// Imports – bring fonts, styles, i18n, and components.
// Font setup – sets Google fonts as CSS variables.
// Metadata – SEO and social sharing info, dynamic per locale.
// Viewport – mobile scaling.
// RootLayout – wraps all pages, provides translations, shows splash screen, navbar, and analytics.
