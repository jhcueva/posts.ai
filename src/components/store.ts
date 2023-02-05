import { atom } from "nanostores";

type User = {
  avatar: string;
  name: string;
  username: string;
  id: string;
};

export const isEnglish = atom(true);
export const isDarkMode = atom(localStorage.darkMode);
export const apiBodyParagraphResponse = atom("");
export const apiTitleParagraphResponse = atom("");
export const isLoading = atom(false);
export const socialNetwork = atom("twitter");
export const postDate = atom(new Date());
export const userInformation = atom<User | null>(null);
