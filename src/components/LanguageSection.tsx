import { Globe } from "lucide-react";
import { translateForLanguage, useTranslation } from "../i18n";
import { Select } from "@radix-ui/themes";
import { useApp, type AppLanguage } from "../context/AppContext";
import { useToast } from "../context/ToastContext";

export const LanguageSection = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useApp();
  const { showToast } = useToast();

  const handleLanguageChange = (value: string): void => {
    const newLanguage = value as AppLanguage;
    setLanguage(newLanguage);
    showToast(translateForLanguage(newLanguage, "toast.languageUpdated"));
  };

  const LANGUAGE_OPTIONS: {
    value: AppLanguage;
    labelKey: "settings.languageOptionEn" | "settings.languageOptionEs";
  }[] = [
    { value: "en", labelKey: "settings.languageOptionEn" },
    { value: "es", labelKey: "settings.languageOptionEs" },
  ];

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Globe className="h-5 w-5 text-amber-500" aria-hidden />
        <h2 className="text-lg font-semibold text-slate-900">
          {t("settings.languagePreferences")}
        </h2>
      </div>
      <p className="mb-6 text-sm text-slate-500">
        {t("settings.languagePreferencesDescription")}
      </p>
      <div className="border-t border-slate-100 pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-slate-900">
              {t("settings.languageLabel")}
            </p>
            <p className="mt-0.5 text-sm text-slate-500">
              {t("settings.languageHint")}
            </p>
          </div>
          <Select.Root value={language} onValueChange={handleLanguageChange}>
            <Select.Trigger
              className="min-w-40 cursor-pointer border border-slate-200 bg-slate-50 text-slate-800"
              aria-label={t("settings.selectLanguageAria")}
            />
            <Select.Content>
              {LANGUAGE_OPTIONS.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="cursor-pointer"
                >
                  {t(opt.labelKey)}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </section>
  );
};
