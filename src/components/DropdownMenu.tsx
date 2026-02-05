import { ChevronDown, Settings, LogOut, User, Building2 } from "lucide-react";
import { DropdownMenu } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n";

export const DropdownMenuComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogOutClick = (): void => {
    navigate("/");
  };

  const handlePersonalClick = (): void => {
    navigate("/settings");
  };

  const handleVeterinaryClick = (): void => {};

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button
          type="button"
          className="flex items-center gap-3 px-2 py-1.5 rounded-full cursor-pointer hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 [&[data-state=open]_svg:last-child]:rotate-180"
          aria-label={t("dropdown.ariaOpen")}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white text-sm font-semibold">
            V
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-slate-900">
              User Test
            </span>
            <span className="text-[10px] uppercase tracking-wide text-slate-500">
              Veterinary Diagnostic Center
            </span>
          </div>
          <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="min-w-48 rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
        align="end"
        sideOffset={8}
      >
        <div className="flex">
          <div className="flex flex-col rounded-l-lg border-r border-slate-100 pr-1">
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none hover:bg-slate-50 data-[state=open]:bg-teal-50 data-[state=open]:text-teal-600">
                <Settings className="h-4 w-4 shrink-0 text-teal-500" />
                <span className="data-[state=open]:text-teal-600">
                  {t("dropdown.configuration")}
                </span>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent
                className="min-w-44 rounded-r-lg border border-slate-200 bg-white p-1 shadow-lg"
                sideOffset={0}
                alignOffset={0}
              >
                <DropdownMenu.Item
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-800 outline-none hover:bg-slate-50 data-highlighted:bg-teal-50 data-highlighted:text-teal-600"
                  onSelect={handlePersonalClick}
                >
                  <User className="h-4 w-4 shrink-0 text-teal-500" />
                  {t("dropdown.personal")}
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-800 outline-none hover:bg-slate-50 data-highlighted:bg-teal-50 data-highlighted:text-teal-600"
                  onSelect={handleVeterinaryClick}
                >
                  <Building2 className="h-4 w-4 shrink-0 text-teal-500" />
                  {t("dropdown.veterinary")}
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Item
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-800 outline-none hover:bg-slate-50"
              onSelect={handleLogOutClick}
            >
              <LogOut className="h-4 w-4 shrink-0 text-teal-500" />
              {t("dropdown.logOut")}
            </DropdownMenu.Item>
          </div>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
