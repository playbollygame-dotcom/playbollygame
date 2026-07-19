import { navbar } from "@/translations/navbar";
import { home } from "@/translations/home";
import { about } from "@/translations/about";
import { contact } from "@/translations/contact";
import { download } from "@/translations/download";
import { faq } from "@/translations/faq";
import { footer } from "@/translations/footer";
import { games } from "@/translations/games";
import { blogs } from "@/translations/blogs";
import { common } from "@/translations/common";
import { bonus } from "@/translations/bonus";
const test = home.en.protectedDescription;
export const translations = {
  en: {
    ...navbar.en,
    ...home.en,
    ...about.en,
    ...contact.en,
    ...download.en,
    ...faq.en,
    ...footer.en,
    ...games.en,
    ...blogs.en,
    ...common.en,
    ...bonus.en,
  },

  hi: {
    ...navbar.hi,
    ...home.hi,
    ...about.hi,
    ...contact.hi,
    ...download.hi,
    ...faq.hi,
    ...footer.hi,
    ...games.hi,
    ...blogs.hi,
    ...common.hi,
     ...bonus.hi,
  },
};