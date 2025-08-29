import { createContext } from "react";
import { LANGUAGE_CONTEXT_TYPE } from "./types";

export const LanguageContext = createContext<LANGUAGE_CONTEXT_TYPE>({
  language: "jp",
  setLanguage: () => {},
});
