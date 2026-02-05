import React from "react";
import { useTranslation } from "../i18n";
import { DropdownMenuComponent } from "./DropdownMenu";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  onClickStudies?: () => void;
  onClickNewReport?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  onClickStudies,
  onClickNewReport,
}: HeaderProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleStudiesClick = (): void => {
    if (!onClickStudies) {
      return;
    }
    onClickStudies();
  };

  const handleNewReportClick = (): void => {
    if (!onClickNewReport) {
      return;
    }
    onClickNewReport();
  };

  return (
    <header className="w-full flex justify-center px-4 pt-4 pb-3 bg-slate-50">
      <nav className="w-full max-w-6xl flex items-center justify-between rounded-full bg-white shadow-sm px-4 py-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          aria-label={t("header.ariaHome")}
          onClick={() => navigate("/home")}
        >
          <Logo />
        </button>

        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={handleStudiesClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 rounded-full cursor-pointer hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={t("header.ariaStudies")}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[11px] text-slate-600"
              aria-hidden="true"
            >
              ⏱
            </span>
            <span>{t("header.myStudies")}</span>
          </button>

          <button
            type="button"
            onClick={handleNewReportClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 rounded-full cursor-pointer hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={t("header.ariaNewReport")}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-white text-[14px]"
              aria-hidden="true"
            >
              +
            </span>
            <span>{t("header.newReport")}</span>
          </button>
          <DropdownMenuComponent />
        </div>
      </nav>
    </header>
  );
};

export default Header;
