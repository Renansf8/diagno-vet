import React from 'react';
import { useTranslation } from '../i18n';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
}: SearchBarProps) => {
  const { t } = useTranslation();
  const resolvedPlaceholder = placeholder ?? t('search.placeholder');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!onChange) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <div className="flex h-10 items-center gap-2 border border-black bg-white px-3 text-sm rounded-md">
      <span className="text-slate-400" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        aria-label={t('search.aria')}
        placeholder={resolvedPlaceholder}
        value={value}
        onChange={handleChange}
        className="h-full border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;

