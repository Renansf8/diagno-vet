import React from 'react';
import { Button } from '@radix-ui/themes';
import { useTranslation } from '../i18n';

type CreateReportButtonProps = {
  onClick?: () => void;
};

const CreateReportButton: React.FC<CreateReportButtonProps> = ({
  onClick,
}: CreateReportButtonProps) => {
  const { t } = useTranslation();

  const handleClick = (): void => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return (
    <Button
      radius="none"
      size="3"
      onClick={handleClick}
      variant="solid"
      color="gray"
      style={{ cursor: 'pointer', borderRadius: '4px' }}
      className="h-full w-full rounded-md justify-center gap-3 text-xs font-semibold tracking-[0.18em] text-white cursor-pointer bg-black! hover:bg-zinc-900!"
      aria-label={t('createReport.aria')}
    >
      <span className="text-base" aria-hidden="true">
        +
      </span>
      <span>{t('createReport.button')}</span>
    </Button>
  );
};

export default CreateReportButton;

