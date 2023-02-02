import { atom } from "nanostores";

export const isEnglish = atom(true);
export const isDarkMode = atom(localStorage.darkMode);
export const apiBodyParagraphResponse = atom("");
export const apiTitleParagraphResponse = atom("");
export const isLoading = atom(false);
export const socialNetwork = atom("twitter");
