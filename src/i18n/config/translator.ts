import type { TLanguage } from "./interfaces/languaje.interface";
import es from "../es";
import en from "../en";
import fr from "../fr";
import pt from "../pt";

const translations = {
  es,
  en,
  fr,
  pt,
} as const;

export const translator = (lang: TLanguage) => {
  return translations[lang];
};
