import React from "react";
import { User, Calendar, Building2, Mail } from "lucide-react";
import { useTranslation } from "../i18n";
import { LanguageSection } from "../components/LanguageSection";

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {t("settings.title")}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {t("settings.subtitle")}
          </p>
        </div>
      </div>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-teal-500" aria-hidden />
          <h2 className="text-lg font-semibold text-slate-900">
            {t("settings.profileSummary")}
          </h2>
        </div>
        <p className="mb-6 text-sm text-slate-500">
          {t("settings.profileSummaryDescription")}
        </p>
        <div className="flex flex-wrap items-start gap-4 sm:gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-violet-500 text-2xl font-semibold text-white">
            F
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-lg font-medium text-slate-900">User test</p>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
              <Calendar
                className="h-4 w-4 shrink-0 text-slate-400"
                aria-hidden
              />
              <span>{t("settings.memberSince", { date: "20/11/2025" })}</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700">
              <Building2
                className="h-4 w-4 shrink-0 text-teal-500"
                aria-hidden
              />
              <span>Veterinary Diagnostic Center</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-teal-500" aria-hidden />
          <h2 className="text-lg font-semibold text-slate-900">
            {t("settings.contactInfo")}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {t("settings.emailLabel")}
            </p>
            <p className="mt-1 text-sm text-slate-900">user.test@gmail.com</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {t("settings.phoneLabel")}
            </p>
            <p className="mt-1 text-sm text-slate-900">483829382</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {t("settings.firstNameLabel")}
            </p>
            <p className="mt-1 text-sm text-slate-900">User</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {t("settings.lastNameLabel")}
            </p>
            <p className="mt-1 text-sm text-slate-900">Test</p>
          </div>
        </div>
      </section>

      <LanguageSection />
    </main>
  );
};

export default Settings;
