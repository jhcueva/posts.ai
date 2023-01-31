import { atom } from "nanostores";

export const isEnglish = atom(true);
export const isDarkMode = atom(localStorage.darkMode);
export const apiBodyParagraphResponse = atom('')
