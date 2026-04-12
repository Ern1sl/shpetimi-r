import { createNavigation } from "next-intl/navigation"; // this is a helper that creates locale-aware navigation tools
import { routing } from "./routing"; // importing the config (supported languages and the default)

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing); //This creates and exports custom navigation tools that are aware of your locales, without these youd have to write the language url of the languages by yourself

// this file gives you language-aware navigation, so all links and routing automatically stay in the correct loacale
