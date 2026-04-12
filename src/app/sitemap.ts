import { MetadataRoute } from "next"; // this is a type helper, it tells typescript "this function will return a sitemap format"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // this creates /sitemap.xml automatically in yoour app
  const baseUrl = "https://www.shpetimi-r.com"; // this is the base url so this is defining the website url,  // this is the base data that the program uses
  const locales = ["en", "al", "de"]; // this is defining the supported languages,  // this is the base data that the program uses
  const routes = ["", "/about", "/form", "/projects"]; // this is defining all the pages,  // this is the base data that the program uses

  const sitemapEntries = locales.flatMap(
    (
      locale, // this generates all the combinations e.g. /en, /en/about etc
    ) =>
      routes.map((route) => ({
        //
        url: `${baseUrl}/${locale}${route}`, // up to here
        lastModified: new Date(), // this tells google that this page was recetly updated
        changeFrequency: "monthly" as const, // suggests: this page changes about once a month
        priority: route === "" ? 1 : 0.8, // this is the priority of the pages, it tells google which pages matter the most
      })),
  );

  return [
    // without this return nothing would be generated
    {
      url: baseUrl,
      lastModified: new Date(), // this tells google when the page was last modified
      changeFrequency: "monthly" as const, // this tells google that the website updates monthly, if this would have been a newspaper it would say it updates daily
      priority: 1,
    },
    ...sitemapEntries, // this adds all generated localized pages and tells google, "here are all my pages, in all languages - please index them"
  ];
}

// This code automatically creates a sitemap listing all pages in all languages so Google can index your site properly
