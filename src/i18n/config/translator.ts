import type { TLanguage } from "./interfaces/languaje.interface";
import es from "../es";
import en from "../en";

const translations = {
  es,
  en,
} as const;

export const translator = (lang?: TLanguage) => {
  if (lang) {
    return translations[lang];
  }
  return null;
};
