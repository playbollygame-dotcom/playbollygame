"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export function useTranslation() {
  const { language } = useLanguage();

  return translations[language];
}