// src/middleware.ts
import { defaultLang } from "@i18n/config/languaje";
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(({ request, redirect, url }) => {
  if (url.pathname === "/") {
    return redirect(`/${defaultLang}`);
  }
});
