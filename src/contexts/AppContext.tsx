import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY_LANGUAGE = "diagno-vet-language";

export type AppLanguage = "en" | "es";

type AppContextValue = {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
};

const getStoredLanguage = (): AppLanguage => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_LANGUAGE);
    if (stored === "en" || stored === "es") {
      return stored;
    }
  } catch (error) {
    console.error(error);
  }
  return "en";
};

const AppContext = createContext<AppContextValue | null>(null);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>(getStoredLanguage);

  const setLanguage = useCallback((newLanguage: AppLanguage): void => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem(STORAGE_KEY_LANGUAGE, newLanguage);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (ctx === null) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
};
