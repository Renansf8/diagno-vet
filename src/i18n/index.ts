import type { AppLanguage } from "../contexts/AppContext";
import { useApp } from "../contexts/AppContext";
import type { TranslationKeys } from "./locales/en";
import { en } from "./locales/en";
import { es } from "./locales/es";

const translations: Record<AppLanguage, TranslationKeys> = {
  en,
  es,
};

type Path =
  | "login.title"
  | "login.continueGoogle"
  | "login.continueGoogleAria"
  | "login.or"
  | "login.emailLabel"
  | "login.emailPlaceholder"
  | "login.continue"
  | "login.continueAria"
  | "login.noAccount"
  | "login.signUp"
  | "login.signUpAria"
  | "header.ariaHome"
  | "header.myStudies"
  | "header.ariaStudies"
  | "header.newReport"
  | "header.ariaNewReport"
  | "dropdown.userName"
  | "dropdown.orgName"
  | "dropdown.ariaOpen"
  | "dropdown.configuration"
  | "dropdown.personal"
  | "dropdown.veterinary"
  | "dropdown.logOut"
  | "home.reports"
  | "home.noReportsYet"
  | "home.reportsPlaceholder"
  | "createReport.button"
  | "createReport.aria"
  | "search.placeholder"
  | "search.aria"
  | "settings.title"
  | "settings.subtitle"
  | "settings.settings"
  | "settings.logOut"
  | "settings.profileSummary"
  | "settings.profileSummaryDescription"
  | "settings.memberSince"
  | "settings.contactInfo"
  | "settings.emailLabel"
  | "settings.phoneLabel"
  | "settings.firstNameLabel"
  | "settings.lastNameLabel"
  | "settings.languagePreferences"
  | "settings.languagePreferencesDescription"
  | "settings.languageLabel"
  | "settings.languageHint"
  | "settings.selectLanguageAria"
  | "settings.languageOptionEn"
  | "settings.languageOptionEs"
  | "toast.languageUpdated";

const getValueByPath = (obj: TranslationKeys, path: string): string | undefined => {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
};

const interpolate = (str: string, vars: Record<string, string>): string => {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value),
    str,
  );
};

export type TranslateOptions = Record<string, string>;

export const getTranslations = (language: AppLanguage): TranslationKeys => {
  return translations[language];
};

export const translateForLanguage = (
  language: AppLanguage,
  key: Path,
  options?: TranslateOptions,
): string => {
  const value = getValueByPath(translations[language], key);
  const fallback = getValueByPath(en, key);
  const raw = value ?? fallback ?? key;
  return options ? interpolate(raw, options) : raw;
};

export const useTranslation = (): {
  t: (key: Path, options?: TranslateOptions) => string;
  language: AppLanguage;
} => {
  const { language } = useApp();
  const dict = translations[language];

  const t = (key: Path, options?: TranslateOptions): string => {
    const value = getValueByPath(dict, key);
    const fallback = getValueByPath(en, key);
    const raw = value ?? fallback ?? key;
    return options ? interpolate(raw, options) : raw;
  };

  return { t, language };
};
