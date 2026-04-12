import { getRequestConfig } from "next-intl/server"; // a helper from next-intl, which lets u define what locale is active and what transaltion messages to load
import { notFound } from "next/navigation"; // function from nextjs which shows a 404 page if something is invalid

const locales = ["en", "al", "de"]; // the allowed languages

export default getRequestConfig(async ({ requestLocale }) => {
  // this runs on every request, it recieves 'requestLocale' which comes from the URL /en, /al, /de, or middleware
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) notFound(); // Validator, "what language is request using" "en" "good", if "fr" bad, show 404 page

  return {
    locale: locale as string,
    messages: (await import(`../../messages/${locale}.json`)).default, // this is what connects language -> JSON file -> UI, if locale = "en" import('../../messages/en.json')
  };
});

// this file says: Based on the current language, load the correct translation JSON file and make it available to the app
