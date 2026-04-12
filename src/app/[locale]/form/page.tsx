import { getTranslations } from "next-intl/server";
import InquiryFormClient from "./InquiryFormClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Form" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function InquiryForm({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <InquiryFormClient locale={locale} />;
}

// Summary

// generateMetadata → sets SEO title & description based on locale.
// InquiryForm → wraps the client-side form, passing locale for translations.
// InquiryFormClient → handles all form UI and behavior.
