"use client";
import React, { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation"; // useRouter is a nextjs router, used here to navigate to success page
import { font1, font2 } from "../fonts";
import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js"; // validates international phone numbers
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  ArrowRightIcon,
} from "@/app/components/icons";
import ContactRow from "@/app/components/ContactRow";
import { useTranslations } from "next-intl";
import { useFormik } from "formik"; // form handling
import * as Yup from "yup"; // form vaidating

export default function InquiryFormClient({ locale }: { locale: string }) {
  const t = useTranslations("Form");
  const router = useRouter();

  const [formError, setFormError] = useState<string | null>(null); // formerror -> stores submission error messages

  const defaultCountry: CountryCode =
    locale === "al" ? "XK" : locale === "de" ? "DE" : "GB";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(t("required") || "Required"),
      phone: Yup.string()
        .required(t("required") || "Required")
        .test("is-valid-phone", t("invalidPhone"), (value) => {
          if (!value) return false;
          const phoneNumber = parsePhoneNumberFromString(value, defaultCountry);
          return phoneNumber ? phoneNumber.isValid() : false;
        }),
      email: Yup.string()
        .email(t("invalidEmail"))
        .required(t("required") || "Required"),
      message: Yup.string().required(t("required") || "Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setFormError(null);

      try {
        const res = await fetch(`/${locale}/form/api`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (data.success) {
          // Soft navigation to success page (avoids splash screen)
          router.push("/form/success");
        } else {
          setFormError(data.error || "send_failed");
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setFormError("server_error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className={`relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-[rgb(54,68,79)] text-white overflow-x-hidden md:overflow-hidden touch-manipulation pt-[70px] md:pt-24 ${font1.className}`}
      style={{ touchAction: "manipulation" }}
    >
      {/* LEFT SECTION - Contact Info Pane */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-8 lg:p-12 xl:p-16 justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[rgb(50,62,72)]/30 overflow-y-auto md:overflow-y-hidden custom-scrollbar">
        <span className="text-gray-300 uppercase tracking-widest text-[11px] mb-4 md:mb-6">
          {t("contact")}
        </span>
        <h1
          className={`${font2.className} text-4xl md:text-5xl xl:text-5xl mb-6 md:mb-8 leading-[1.1] text-white font-normal break-words`}
        >
          {t("headline")
            .split("\n")
            .map((line: string, i: number) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </h1>
        <p className="text-white text-sm md:text-base max-w-sm mb-10 md:mb-12 leading-relaxed opacity-90 font-normal">
          {t("description")}
        </p>

        {/* CONTACT BOXES */}
        <div className="space-y-6 md:space-y-8">
          <ContactRow icon={<EmailIcon />} label="Email">
            <span className="text-[13px] tracking-widest font-normal text-white">
              infoshpetimi.r@gmail.com
            </span>
          </ContactRow>

          <ContactRow icon={<PhoneIcon />} label="Phone">
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (43) 511 743{" "}
              <span className="text-white/80 ml-2">· {t("primary")}</span>
            </span>
            <span className="text-[12px] lg:text-[14px] tracking-widest font-normal text-white/90">
              +383 (49) 413 218{" "}
              <span className="text-white/80 ml-2">· {t("secondary")}</span>
            </span>
          </ContactRow>

          <div className="w-16 h-[2px] bg-white opacity-40 mt-12"></div>
        </div>
      </div>

      {/* RIGHT SECTION - The Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-8 lg:p-12 overflow-y-auto md:overflow-y-hidden custom-scrollbar relative z-10 bg-[rgb(54,68,79)] md:justify-center">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-2 xl:gap-0 mb-6 md:mb-8">
          <h2 className={`${font2.className} text-3xl text-white font-normal`}>
            {t("title")}
          </h2>
          <span className="text-[9px] uppercase tracking-widest text-white opacity-60">
            * {t("required")}
          </span>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="group space-y-6 md:space-y-8 max-w-lg"
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
            <div className="flex flex-col relative leading-none">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80 block">
                {t("fullName")} *
              </label>
              <input
                {...formik.getFieldProps("fullName")}
                placeholder={t("placeholderName")}
                className={`bg-transparent border-b py-3 outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600 block ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-400 focus:border-red-400"
                    : "border-white/30 focus:border-white"
                }`}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="absolute -bottom-5 left-0 text-red-400 text-[9px] uppercase tracking-widest whitespace-nowrap">
                  {formik.errors.fullName as string}
                </div>
              )}
            </div>
            <div className="flex flex-col relative leading-none">
              <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80 block">
                {t("phone")} *
              </label>
              <input
                type="tel"
                {...formik.getFieldProps("phone")}
                placeholder={t("placeholderPhone")}
                className={`bg-transparent border-b py-3 outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600 block ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-400 focus:border-red-400"
                    : "border-white/30 focus:border-white"
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="absolute -bottom-5 left-0 text-red-400 text-[9px] uppercase tracking-widest whitespace-nowrap">
                  {formik.errors.phone as string}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col relative pointer-events-auto leading-none">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80 block">
              {t("email")} *
            </label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              placeholder={t("placeholderEmail")}
              className={`bg-transparent border-b py-3 outline-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600 block ${
                formik.touched.email && formik.errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/30 focus:border-white"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="absolute -bottom-5 left-0 text-red-400 text-[9px] uppercase tracking-widest whitespace-nowrap">
                {formik.errors.email as string}
              </div>
            )}
          </div>

          <div className="flex flex-col relative pointer-events-auto leading-none">
            <label className="text-[10px] text-white uppercase tracking-widest mb-3 opacity-80 block">
              {t("message")} *
            </label>
            <textarea
              rows={4}
              {...formik.getFieldProps("message")}
              placeholder={t("placeholderMessage")}
              className={`bg-transparent border-b py-3 outline-none resize-none pointer-events-auto transition-all font-normal text-white placeholder:text-gray-600 block ${
                formik.touched.message && formik.errors.message
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/30 focus:border-white"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="absolute -bottom-5 left-0 text-red-400 text-[9px] uppercase tracking-widest whitespace-nowrap">
                {formik.errors.message as string}
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-col xl:flex-row xl:items-center justify-between gap-8 pointer-events-auto">
            <p className="text-[9px] text-white uppercase tracking-[0.2em] xl:tracking-widest italic opacity-60 leading-relaxed xl:max-w-[200px] font-normal w-full">
              {t("confidential")}
            </p>
            <div className="flex flex-col items-center gap-6 self-start xl:self-auto w-full xl:w-auto">
              {formError && (
                <p className="text-red-400 text-[10px] uppercase tracking-widest">
                  {formError === "missing_config"
                    ? "Config Error"
                    : "Submission Failed"}
                </p>
              )}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="px-8 xl:px-12 py-4 xl:py-5 w-full xl:w-auto text-[9px] xl:text-[10px] font-normal uppercase tracking-[0.2em] xl:tracking-[0.4em] transition-all duration-300 border-2 shadow-2xl shadow-black/20 bg-white text-black border-white hover:bg-transparent hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-wait"
              >
                {formik.isSubmitting ? t("sending") : `${t("button")} →`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Summary

// This component:

// Renders contact info on the left.
// Renders interactive form on the right.
// Uses Formik + Yup for validation.
// Submits the form via fetch and handles success/error.
// Fully responsive and internationalized using next-intl.
// Has client-side behavior only, so it requires "use client".
