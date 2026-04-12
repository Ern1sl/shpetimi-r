import createMiddleware from "next-intl/middleware"; // middleware is a helper from next-intl, it helps with detecting languages, redirections to the correct locale and keeps the language consistent across navigation
import { routing } from "./i18n/routing"; // this ensures that the correct language route is active

export default createMiddleware(routing); // this is like an overlooker which checks to see if the language is loaded in a specific language

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"], // this is made to tell the program on what the middleware has premission to run on and on what it doesnt
};

// this file means: Before loading any page, check the user’s language and route them correctly
// It makes sure the user is routed to the default language (en) if no language is in the URL
