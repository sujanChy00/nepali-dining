export type LANGUAGE_KEY = "en" | "jp";

export type LANGUAGE_CONTEXT_TYPE = {
  language: LANGUAGE_KEY;
  setLanguage: (language: LANGUAGE_KEY) => void;
};
