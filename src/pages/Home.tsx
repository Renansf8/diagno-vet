import React, { useState } from "react";
import { useTranslation } from "../i18n";
import SearchBar from "../components/SearchBar";
import CreateReportButton from "../components/CreateReportButton";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { t } = useTranslation();

  const handleSearchChange = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <main className="px-4 py-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <SearchBar value={searchValue} onChange={handleSearchChange} />
          <CreateReportButton />
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl">
        <div className="rounded-xl bg-white shadow-sm border border-slate-200">
          <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <h2 className="text-sm font-semibold text-slate-900">
              {t("home.reports")}
            </h2>
            <span className="text-xs text-slate-400">
              {t("home.noReportsYet")}
            </span>
          </header>
          <div className="px-6 py-8 text-center text-sm text-slate-400">
            {t("home.reportsPlaceholder")}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
