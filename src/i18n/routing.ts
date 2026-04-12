import { defineRouting } from "next-intl/routing"; // this is just a tool

export const routing = defineRouting({
  //this makes the tool able to be exported

  locales: ["en", "al", "de"], // A list of all locales that are supported

  defaultLocale: "en", // default locale
  localeDetection: false, // this disables browser detection, so if a user has al language on the browser, the site wont switch to al but will stay to what its default in the code is
});
